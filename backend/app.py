import os

import joblib
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()
open_weather_api_key=os.getenv("OPEN_WEATHER_API_KEY")
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

app = Flask(__name__)
CORS(app)
visibility_model = joblib.load("model.joblib")
model = genai.GenerativeModel(
    'gemini-1.5-pro-latest',
    system_instruction="You are a constellation expert on the 88 constellations. Respond to user questions and remind them you are a constellation master if they steer off topic. Reply in a friendly and informative manner, but limit yourself to 5 sentences at a time maximum. Do not use markdown."
)


@app.route("/api")
def test():
    """
    Test Endpoint
    """
    return jsonify({"message": "Hello, World!"})


@app.route("/api/predict", methods=['POST'])
def predict():
    """
    Predict Endpoint
    'Cloud Cover', 'Humidity', 'Wind', 'Temperature' -> 'Seeing'

    Example:
    Cloud Cover Seeing  Wind  Humidity  Temperature
              0      3  13.5      25.0          2.5
    """
    if request.is_json:
        data = request.get_json()
        prediction = visibility_model.predict([[data["cloud"], data["humidity"], data["wind"], data["temperature"]]])
        return jsonify({"prediction": f"{prediction[0] * 20:.2f}%"})
    else:
        return jsonify({"error": "Invalid data"})


@app.route("/api/predicts", methods=['POST'])
def predicts():
    """
    Predictions Endpoint
    'Cloud Cover', 'Humidity', 'Wind', 'Temperature' -> 'Seeing'
    """
    if request.is_json:
        resp = []
        data = request.get_json()
        for i in range(len(data["cloud"])):
            prediction = visibility_model.predict([[data["cloud"][i], data["humidity"][i], data["wind"][i], data["temperature"][i]]])
            resp.append(f"{prediction[0] * 20:.2f}%")
        return jsonify({"predictions": resp})
    else:
        return jsonify({"error": "Invalid data"})


@app.route("/api/chat", methods=['POST'])
def chat():
    '''
    Chatbot Endpoint
    '''
    if request.is_json:
        data = request.get_json()
        response = model.generate_content(f"Hi, you are a constellation expert on the 88 constellations. Respond to this user question: {data['message']}")
        return jsonify({"response": response.text})
    else:
        return jsonify({"error": "Invalid data"})


@app.route("/api/chats", methods=['POST'])
def chats():
    '''
    Chatbot Endpoint with history

    message = user message

    history = [
        parts {
            text: "In one sentence, explain how a computer works to a young child."
        }
        role: "user"
        , parts {
        text: "A computer is like a smart helper that can store information, do math problems, and follow our instructions to make things happen."
        }
        role: "model"
    ]
    '''
    if request.is_json:
        data = request.get_json()
        print(data)
        chat = model.start_chat(history=data[:-1])
        response = chat.send_message(data[-1]["parts"]["text"])
        return jsonify({"response": response.text})
    else:
        return jsonify({"error": "Invalid data"})


@app.route("/api/weather", methods=['POST'])
def weather():
    '''
    Predict weather from longitude and latitude.
    '''
    if request.is_json:
        data = request.get_json()
        url = f"https://api.openweathermap.org/data/2.5/weather?lat={data['lat']}&lon={data['long']}&appid={open_weather_api_key}&units=metric"
        response = requests.get(url).json()
        return jsonify({
            "humidity": response["main"]["humidity"],
            "temperature": response["main"]["temp"],
            "wind": response["wind"]["speed"] * 3.6,
            "cloud": response["clouds"]["all"] / 10,
        })
    else:
        return jsonify({"error": "Invalid data"})


@app.route("/api/weathers", methods=['POST'])
def weathers():
    '''
    Predict weather from longitude and latitude.
    Gets data for several days.
    '''
    if request.is_json:
        data = request.get_json()
        url = f"https://api.open-meteo.com/v1/forecast?latitude={data['lat']}&longitude={data['long']}&hourly=temperature_2m,relative_humidity_2m,cloud_cover,wind_speed_10m"
        response = requests.get(url).json()
        return jsonify({
            "times": response["hourly"]["time"],
            "temperature": response["hourly"]["temperature_2m"],
            "humidity": response["hourly"]["relative_humidity_2m"],
            "cloud": response["hourly"]["cloud_cover"],
            "wind": response["hourly"]["wind_speed_10m"],
        })
    else:
        return jsonify({"error": "Invalid data"})

if __name__ == "__main__":
    app.run()
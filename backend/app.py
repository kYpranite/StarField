import os

import joblib
import requests
from dotenv import load_dotenv
import google.generativeai as genai
from flask import Flask, jsonify, request


load_dotenv()
open_weather_api_key=os.getenv("OPEN_WEATHER_API_KEY")
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

app = Flask(__name__)
visibility_model = joblib.load("model.joblib")
model = genai.GenerativeModel('gemini-1.5-pro-latest')


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
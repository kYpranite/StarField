import os
import joblib

from dotenv import load_dotenv
from flask import Flask, jsonify, request
import google.generativeai as genai


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

@app.route("/api/chat")
def chat():
    '''
    Chatbot Endpoint
    '''
    response = model.generate_content("The opposite of hot is")
    return jsonify({"response": response.text})

@app.route("/api/weather")
def weather():
    '''
    Predict weather from longitude and latitude.
    '''
    latitude = 40.7128  # Example latitude (New York City)
    longitude = -74.0060  # Example longitude (New York City)
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={open_weather_api_key}"
    response = requests.get(url)
    return jsonify({response: response.text})
  
    
if __name__ == "__main__":
    app.run()
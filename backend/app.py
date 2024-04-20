import os

from dotenv import load_dotenv
from flask import Flask, jsonify
import google.generativeai as genai


load_dotenv()
open_weather_api_key=os.getenv("OPEN_WEATHER_API_KEY")
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

app = Flask(__name__)
model = genai.GenerativeModel('gemini-1.5-pro-latest')


@app.route("/api")
def api():
    """
    Gemini API endpoint
    """
    response = model.generate_content("The opposite of hot is")

    return jsonify({"response": response.text})

@app.route("/api/weather")
def weather():
    latitude = 40.7128  # Example latitude (New York City)
    longitude = -74.0060  # Example longitude (New York City)
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={open_weather_api_key}"
    response = requests.get(url)
    return jsonify({response: response.text})
  
    
if __name__ == "__main__":
    app.run()
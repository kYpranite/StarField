import os

from dotenv import load_dotenv
from flask import Flask, jsonify
import google.generativeai as genai


load_dotenv()
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


if __name__ == "__main__":
    app.run()
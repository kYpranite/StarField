import os
import re
import json

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv


load_dotenv()
google_maps_api_key = os.getenv("VITE_MAPS_API_KEY")


with open("data.txt", "r") as f:
    locations = [x.split(":")[1] for x in f.read().splitlines() if x.count(":") > 0]

countries = {
    "Mexico": "MX",
    "United States": "US",
    "Canada": "CA",
    "Bahamas": "BS",
}

for location in locations:
    extra = countries[location.split(", ")[-1]] if location.split(", ")[-1] in countries else ""
    response = requests.get(
        f"https://maps.googleapis.com/maps/api/geocode/json?address={location.split(',')[0]}{extra}&key={google_maps_api_key}"
    )
    input(response.text)
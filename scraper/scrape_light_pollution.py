import os
import math

import requests
from dotenv import load_dotenv


load_dotenv()
google_maps_api_key = os.getenv("VITE_MAPS_API_KEY")


with open("data.txt", "r") as f:
    locations = [x.split(":")[1] for x in f.read().splitlines() if x.count(":") > 0]

with open("light_pollution.txt", "r") as f:
    done = [x.split(":")[0] for x in f.read().splitlines()]

countries = {
    "Mexico": "MX",
    "United States": "US",
    "Canada": "CA",
    "Bahamas": "BS",
}

for location in locations:
    if location in done:
        continue

    extra = countries[location.split(", ")[-1]] if location.split(", ")[-1] in countries else ""
    response = requests.get(
        f"https://maps.googleapis.com/maps/api/geocode/json?address={location.split(',')[0]}{extra}&key={google_maps_api_key}"
    )

    coords = None
    for result in response.json()["results"]:
        if "geometry" in result:
            if "location" in result["geometry"]:
                coords = f'{result["geometry"]["location"]["lng"]},{result["geometry"]["location"]["lat"]}'
                break
    
    if coords:
        response = requests.get(
            f"https://www2.lightpollutionmap.info/QueryRaster/?qk=MTcxMzYxNzIyOTgwMTtpc3Vja2RpY2tzOik=&ql=wa_2015&qt=point&qd={coords}",
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
            }
        )
        if response.text == ",":
            print(coords)
            with open("light_pollution.txt", "a") as f:
                f.write(f"{location}\n")
            continue
        artificial_brightness = float(response.text.split(",")[0])
        natural_brightness = artificial_brightness + 0.171168465
        total_brightness = artificial_brightness + natural_brightness
        sqm = math.log10(total_brightness / 108000000) / -0.4

        with open("light_pollution.txt", "a") as f:
            f.write(f"{location}:{sqm}\n")
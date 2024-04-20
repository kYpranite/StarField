import re
import json

import requests
from bs4 import BeautifulSoup


def get_type(data):
    if data[0]:
        code = data[0][20:22]
        if code == "C0":
            return "Cloud Cover"
        elif code == "T0":
            return "Transparency"
        elif code == "S0":
            return "Seeing"
        elif code == "W0":
            return "Smoke"
        elif code == "D0":
            return "Wind"
        elif code == "H0":
            return "Humidity"
        elif code == "R0":
            return "Temperature"
        else:
            raise Exception("Unknown code: " + code)
    else:
        info = data[1]
        if "SunAlt" in info:
            return "Darkness"
        else:
            raise Exception("Unknown info: " + info)


with open("location_urls.json", "r") as f:
    location_data = json.loads(f.read())

output = {}
for country in location_data:
    for location, location_url in location_data[country].items():
        while 1:
            try:
                response = requests.get(
                    location_url,
                    headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
                    }
                )

                if "A Sponsored Feature" in response.text:
                    print("Skipping Sponsor:", location)
                    break
                location_full = re.search("It's a prediction of when (.*?), will have", response.text).group(1)
                soup = BeautifulSoup(response.text, "html.parser").find("map", {"name": "ckmap"})

                data = {}
                for area in soup.find_all("area"):
                    info = area.get("href", None), area.get("title")
                    if info[0] and "/f.php?" in info[0]:
                        data_type = get_type(info)
                        if data_type:
                            data.setdefault(data_type, []).append(info[1])
                
                output[f"{location_full}, {country}"] = data
                print(f"Scraped {location_full}, {country}")
                break
            except Exception as e:
                input(e)

with open("data.json", "w") as f:
    f.write(json.dumps(output, indent=4))

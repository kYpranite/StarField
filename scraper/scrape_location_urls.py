import json

import requests
from bs4 import BeautifulSoup


CHART_LIST_PAGE = "https://www.cleardarksky.com/csk/big_clist.html"


response = requests.get(
    CHART_PAGE,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    }
)

soup = BeautifulSoup(response.text, "html.parser")
data_table = soup.find("table", {"cellpadding": 10})

data = {}

for location_data in str(data_table).split("F0A0F0")[1:]:
    soup = BeautifulSoup(location_data, "html.parser")
    
    country = soup.find("a").text
    data[country] = {}

    for link in soup.find_all("a"):
        url = link.get("href")
        if url and "/c/" in url:
            data[country][link.text] = "https://www.cleardarksky.com" + url

with open("location_urls.txt", "w") as f:
    f.write(json.dumps(data, indent=4))

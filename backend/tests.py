
import requests

r = requests.post("http://127.0.0.1:5000/api/predict", json={
    "cloud": 0,
    "humidity": 13.5,
    "wind": 25,
    "temperature": 2.5
})
print(r.text)

import requests

r = requests.post("http://127.0.0.1:5000/api/predict", json={
    "cloud": 0,
    "humidity": 13.5,
    "wind": 25,
    "temperature": 2.5
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/weather", json={
    "lat": 40.7128,
    "long": -74.0060
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/chat", json={
    "message": "what is the bird constellation"
})
print(r.text)
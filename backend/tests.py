
import requests

r = requests.post("http://127.0.0.1:5000/api/predict", json={
    "cloud": 0,
    "humidity": 13.5,
    "wind": 25,
    "temperature": 2.5
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/predicts", json={
    "cloud": [0, 0],
    "humidity": [13.5, 13.5],
    "wind": [25, 25],
    "temperature": [2.5, 2.5]
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/weather", json={
    "lat": 40.7128,
    "long": -74.0060
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/weathers", json={
    "lat": 40.7128,
    "long": -74.0060
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/chat", json={
    "message": "what is the bird constellation"
})
print(r.text)

r = requests.post("http://127.0.0.1:5000/api/chats", json={
    "message": "what is the bird constellation",
    "history": [
        {
            "parts": {
                "text": "What is a bird constellation",
            },
            "role": "user",
        },
    ]
})
print(r.text)
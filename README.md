# Inspiration
StarField came from a deep appreciation of the night sky gained from camping. After returning to the city, we were disappointed about how light polluted the skies were and how little you could truly see. We thought of StarField to make the skies accessible again to those trapped in urban cities.

# What it does
StarField is a web application that uses machine learning to predict sky visibility at a certain area, providing the prime time and location to stargaze. In addition to these capabilities, StarField also comes loaded with Gemini, an AI personal assistant to help you identify constellations in the sky or recommend you equipment. StarField works with any location in the United States and provides an opportunity for people to explore the skies!


# How we built it
The frontend of StarField was built using **JavaScript**, **React.js**, and **Tailwind.css** to create a clean and minimalistic user interface. The backend was implemented using **Flask** to handle our API endpoints and Python for machine learning (scikit-learn) and webscraping. We also used Google Gemini to support our chatbot and Google Maps API to handle maps.

### Tech Stack
**Front End:**
 - React.js
 - Tailwind.css
 - Javascript/JSX

**Back End:**

 - Flask
 - Python
 
 **API:**
 
- Google Gemini API
- Google Maps JS API

# Challenges we ran into

### Limited Data
By far the hardest challenge we ran into were the limited datasets on sky visibility. There are limited APIs on sky visibility around the world and it was very difficult finding data to train our model on. We overcame this by finding data through webscraping.

### Unfamiliar libraries and services
Outside of that, another challenge we faced was having to use unfamiliar technologies. One of our group members had no experience with Tailwind while the other two had very limited experience. It was also our first time experimenting with machine learning. We had to learn how to design models in order to train and predict data. The short 36 hour time limit didn’t make this any easier.

# Accomplishments that we're proud of 

### It works!
Combining so many new technologies in such a short time was no easy feat for us. This project was a culmination of 36 hours of grueling work. The fact that we managed to finish this project in time is something that we are proud of! 

### Front End!
We are proud of our smooth, intuitive, and informative user interface despite low experience with these libraries. With little experience, we managed to design and implement a pleasant and streamlined UII

# What we learned

We learned about splitting up work and helping out each other in time-pressured circumstances. In terms of skills, we also gained a lot of valuable experience regarding React, Tailwind and machine learning in general.

# What's next for Starfield
In the future, we see ourselves implementing the project on a larger scale, by deploying it to the public, allowing people to upload, share, and track their stargazing experience. This provides a more robust stargazing system and a strongly connected community towards appreciating the beautiful night sky. 

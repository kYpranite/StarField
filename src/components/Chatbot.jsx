import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

function convertMessagesFormat(messages) {
  let newFormat = {
    message: "",
    history: [],
  };

  if (messages.length === 0) {
    return newFormat;
  }

  // Set the most recent message's text as the main message
  newFormat.message = messages[messages.length - 1].text;

  // Loop through the messages to populate the history array
  messages.forEach((message) => {
    let role = message.sender === "User" ? "user" : "gemini";

    let historyItem = {
      parts: {
        text: message.text,
      },
      role: role,
    };

    newFormat.history.push(historyItem);
  });

  return newFormat;
}

const Chatbot = ({ showChatbot, handleButtonClick }) => {
  const [messages, setMessages] = useState([
    {
      key: -1,
      text: "Not sure what you are looking at? Describe it to me and I'll see if I can help.",
      sender: "Gemini",
    },
  ]);

  if (messages[messages.length - 1].sender === "User") {
    console.log(convertMessagesFormat(messages))
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(convertMessagesFormat(messages)),
    };
    fetch("http://localhost:5000/api/chats", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...messages,
          {
            text: data,
            sender: "Gemini",
            key: Math.floor(Math.random() * 100000),
          },
        ]);
        console.log(convertMessagesFormat(messages));
      });
  }

  return (
    <>
      {showChatbot ? (
        <ChatbotWindow messages={messages} setMessages={setMessages} />
      ) : (
        <ChatbotButton handleButtonClick={handleButtonClick} />
      )}
    </>
  );
};

export default Chatbot;

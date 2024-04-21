import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

const Chatbot = ({ showChatbot, handleButtonClick }) => {
  const [messages, setMessages] = useState([
    {
      parts: {
        text: "Not sure what you are looking at? Describe it to me and I'll see if I can help!",
      },
      role: "model",
    },
  ]);

  if (messages[messages.length - 1].role === "user") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messages),
    };
    fetch("http://localhost:5000/api/chats", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...messages,
          {
            parts: {
              text: data["response"],
            },
            role: "model",
          },
        ]);
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

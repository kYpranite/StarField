import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

const Chatbot = ({ showChatbot, handleButtonClick }) => {

  const [messages, setMessages] = useState([
    { key:-1, text: "Not sure what you are looking at? Describe it to me and I'll see if I can help.", sender: "Gemini"},
  ]);

    if (messages[messages.length - 1].sender === "User") {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(messages)
      };
      fetch('https://localhost:5000', requestOptions)
      .then(response => response.json())
      .then(data => {
        setMessages([
          ...messages,
          {
            text: data,
            sender: "Gemini",
            key: Math.floor(Math.random() * 100000),
          },
        ]);
        console.log(messages);
      });
    }

  return (
    <>
      {showChatbot ? (
        <ChatbotWindow
          messages={messages} setMessages={setMessages}
        />
      ) : (
        <ChatbotButton handleButtonClick={handleButtonClick} />
      )}
    </>
  );
};

export default Chatbot;

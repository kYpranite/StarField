import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotWindow from "./ChatbotWindow";

const Chatbot = ({ showChatbot, handleButtonClick }) => {

  const [messages, setMessages] = useState([
    { key:-1, text: "Not sure what you are looking at? Describe it to me and I'll see if I can help.", sender: "Gemini"},
  ]);

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

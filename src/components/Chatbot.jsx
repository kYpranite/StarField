import React, { useState } from "react";
import axios from "axios";

const ChatBot = ({ onClick }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const BASE_URL = "http://localhost:5000";

  const handleButtonClick = () => {
    setShowChatbot(!showChatbot);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async (userInput) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/chat`, {
        message: userInput,
      });
      return response.data.message;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSendMessage = () => {
    sendMessage(userInput).then((response) => {
      setMessages([
        ...messages,
        { text: userInput, isUser: true },
        { text: response, isUser: false },
      ]);
      setUserInput("");
    });
  };

  return (
    <>
      <button
        className="fixed bottom-10 right-10 bg-white text-white font-bold py-3 px-3 rounded-full transition duration-300 ease-in-out z-10"
        onClick={onClick}
      >
        <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png" alt="Chatbot Icon" />
      </button>
      {/* <div className="chat-container">
        <div className="chat-history">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.isUser ? "user-message" : "bot-message"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="send-button">
            Send
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to My Chatbot App
        </h1>
        <Button onClick={handleButtonClick} />
        {showChatbot && <GeminiChatbot />} */}
      {/* </div> */}
    </>
  );
};

export default ChatBot;

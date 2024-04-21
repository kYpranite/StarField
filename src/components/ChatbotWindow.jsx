import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function ChatbotWindow({
  messages,
  setMessages,
  setShowChatbot,
}) {
  const [inputText, setInputText] = useState("");

  const scrollToBottom = () => {
    scrollDiv.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderMessage = (msg) => {
    return (
      <ChatMessage
        key={msg.parts.text}
        sender={msg.role === "model" ? "Gemini" : "Me"}
        text={msg.parts.text}
      />
    );
  };

  const scrollDiv = React.useRef();

  return (
    <div className="flex flex-col h-3/5 w-1/4 mx-auto rounded-xl bg-gray-800 p-4 shadow-lg fixed z-50 bottom-10 right-10">
      <h1 className="font-bold w-[95%] text-lg mb-2">Ask Gemini</h1>
      <button
        className="absolute right-4 top-4 px-2 hover:bg-gray-700 rounded-xl"
        onClick={() => setShowChatbot(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>

      <div className="flex-grow overflow-y-auto p-2">
        <div className="flex flex-col">
          {messages && messages.map((msg) => renderMessage(msg))}
        </div>
        <div ref={scrollDiv}></div>
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter" && e.target.value !== "") {
              setInputText("");
              setMessages([
                ...messages,
                {
                  parts: {
                    text: inputText,
                  },
                  role: "user",
                },
              ]);

              console.log(messages);
            }
          }}
          className="flex-grow px-3 py-2 border-[1px] border-gray-400 rounded-lg focus:outline-none"
        />
      </div>
    </div>
  );
}

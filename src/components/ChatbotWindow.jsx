import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatbotWindow({ messages, setMessages }) {
  const [inputText, setInputText] = useState("");

  const renderMessage = (msg) => {
    if (scrollDiv.current) {
      scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
      <ChatMessage
        key={msg.parts.text}
        sender={msg.role}
        text={msg.parts.text}
      />
    );
  };

  const scrollDiv = React.useRef();

  return (
    <div className="flex flex-col h-3/5 w-1/4 mx-auto rounded-xl bg-gray-800 p-4 shadow-lg fixed z-50 bottom-10 right-10">
      <h1 className="font-bold pb-2">Ask Gemini</h1>
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

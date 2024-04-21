import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ChatMessage({ text, sender }) {
  const messageClasses =
    sender === "Me" ? "float-right flex-row-reverse" : "float-left";

  return (
    <>
      <div
        className={`font-light mb-[2px] text-xs w-full ${
          sender === "Me" ? "text-right" : "text-left"
        }`}
      >
        {sender}
      </div>
      <div className={`flex ${messageClasses}`}>
        <FontAwesomeIcon className="mt-2" icon={faUser} />
        <p className="bg-gray-600 px-3 py-1.5 rounded-xl text-sm break-words max-w-[80%] mx-3 mb-1">
          {text}
        </p>
      </div>
    </>
  );
}

import React from "react";

const Card = ({ text, image }) => {
  return (
    <button className="flex flex-col items-center justify-center p-3 w-40 h-[50%]  bg-gray-800 rounded-lg shadow-lg card cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-m font-semibold text-white">{text}</h1> 
      <img src={image} alt={text} className=" w-[95%] h-[80%] rounded-xl pt-3" />
    </button>
  );
};

export default Card;

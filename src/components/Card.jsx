import React from "react";

const Card = ({ text, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 w-30 h-40 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-m text-white">{text}</h1> 
      <img src={image} alt={text} className=" w-[95%] h-[80%] rounded-lg" />
    </div>
  );
};

export default Card;

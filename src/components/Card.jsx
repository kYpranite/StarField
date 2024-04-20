import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="flex flex-col p-5 w-40 h-40  bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-m text-white">{title}</h1> 
      <img src={image} alt={title} className=" w-full h-full rounded-lg" />
    </div>
  );
};

export default Card;

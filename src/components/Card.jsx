import React from "react";
import bodies from "../utils/astronomicalBodies";

const Card = ({ text, image, setConstellationView, bodiesObj }) => {
  const handleClick = (e) => {
    setConstellationView({
      name: bodiesObj.name,
      visibility: bodiesObj.visibility,
      information: bodiesObj.information,
      best_viewing_equipment: bodiesObj.best_viewing_equipment,
      open: true,
    })
  };
  return (
    <button onClick={handleClick} className="flex flex-col items-center justify-center p-3 w-40 h-[50%]  bg-gray-800 rounded-lg shadow-lg card cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-m font-semibold text-white">{text}</h1> 
      <img src={image} alt={text} className=" w-[95%] h-[80%] rounded-2xl pt-3" />
    </button>
  );
};

export default Card;

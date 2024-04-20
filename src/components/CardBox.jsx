import React from "react";
import Card from "./Card";
import bodies from "../utils/astronomicalBodies";

const getSeason = (month) => {
  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "fall";
  } else {
    return "winter";
  }
};

const CardBox = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentSeason = getSeason(currentMonth);

  return (
    <div className="flex flex-wrap flex-row w-[80%] h-[50%] my-5 mx-auto gap-y-7 gap-10 overflow-y-auto border-2 border-gray-700 rounded-md justify-center py-7">
      {bodies[currentSeason].map((body, index) => (
        <Card
          key={index}
          text={body}
          image={`constellations_pictures/${body}.webp`}
        />
      ))}
    </div>
  );
};

export default CardBox;

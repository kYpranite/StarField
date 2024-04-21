import React from "react";
import Card from "./Card";
import bodies from "../utils/astronomicalBodies";
import "./CardBoxStyle.css";

/*
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
*/
const CardBox = ({ setConstellationView, season }) => {
  // const currentDate = new Date();
  // const currentMonth = currentDate.getMonth() + 1;
  const currentSeason = season.toLowerCase();
  return (
    <>
      <div className="flex flex-wrap flex-row w-[95%] h-[50vh] px-3 my-5 mx-auto gap-y-5 gap-x-6 overflow-y-auto border-2 border-gray-700 rounded-md justify-center py-5">
        {bodies[currentSeason].map((body, index) => (
          <Card
            setConstellationView={setConstellationView}
            key={index}
            text={body.name}
            image={`constellations_pictures/${body.name}.webp`}
            bodiesObj={body}
          />
        ))}
      </div>
    </>
  );
};

export default CardBox;

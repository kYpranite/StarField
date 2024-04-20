import React from "react";
import Card from "./Card";
import bodies "./astronomicalBodies";

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
  
  const SideBar = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentSeason = getSeason(currentMonth);
  
    return (
      <div className="w-1/3 bg-white h-screen flex justify-center">
        <div className="flex flex-wrap w-[90%] h-[50%] my-5 gap-y-7 gap-10 overflow-y-auto">
            {bodies[currentSeason].map((body, index) => 
              <Card key={index} text={body} image={`constellations_pictures/${body}.webp`} />
        )}
        </div>
      </div>
    )
  };
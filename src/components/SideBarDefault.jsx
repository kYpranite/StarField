import CardBox from "./CardBox";
import VisibilityChart from "./VisibilityChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SideBarDefault({
  isOpen,
  searchRef,
  chartData,
  setConstellationView,
}) {
  const [chartDate, setChartDate] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      if (chartDate > 0){
        setChartDate((chartDate)=>chartDate-1);
      }
    }else{
      if(chartDate < Object.keys(chartData).length-1){
        setChartDate((chartDate)=>chartDate+1);
      }
    }
  };
  return (
    <div
      className={`fixed items-start overflow-y-auto flex-wrap top-0 left-0 w-[38%] bg-gray-900 h-full flex flex-row justify-center z-20 pt-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <div className="px-6 py-1">
        <h1 className="font-bold text-left text-lg my-2">
          Visible Constellations
        </h1>
        <CardBox setConstellationView={setConstellationView} />
      </div>
      <hr className="w-11/12 border-[0.5px] border-gray-400"></hr>
      <div ref={searchRef} className="h-[50%] w-[100%] p-5">
        <h1 className="font-bold text-lg text-left">Visibility Predictions: {Object.keys(chartData)[chartDate]}</h1>
        {JSON.stringify(chartData) != "{}" ? (
          <div className="flex flex-row h-full w-full">
            <button onClick={()=>{handleClick("left")}} className="h-10 w-10 inline-block mt-40">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <VisibilityChart
              data={chartData}
              chartDate={chartDate}
              setChartDate={chartDate}
            />  
            <button onClick={()=>{handleClick("right")}} className="h-10 w-10 inline-block mt-40 mx-5">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        ) : (
          <h1 className="text-gray-300">
            Chart will load after a location is inputted!
          </h1>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";

import Cardbox from "./CardBox";
import VisibilityChart from "./VisibilityChart";

const SideBar = ({ isOpen, chartData, setChartData }) => {
  return (
    <div
      className={`fixed items-start overflow-y-auto flex-wrap top-0 left-0 w-[38%] bg-gray-900 h-full flex flex-row justify-center z-20 pt-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <div className="p-5">
        <h1 className="font-bold text-left">Visible Constellations</h1>
        <Cardbox />
      </div>
      <hr className="w-full border-[0.5px] border-gray-400"></hr>
      <div className="h-[50%] w-[100%] p-5">
        <h1 className="font-bold text-left">Visibility Predictions</h1>
        {chartData.length ? <VisibilityChart data={chartData}/> : <h1>Chart will load after a location is inputted!</h1>}
      </div>
    </div>
  );
};

export default SideBar;

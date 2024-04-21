import React, { useState } from "react";
import SideBarDefault from "./SideBarDefault";
import SidebarConstellation from "./SidebarConstellation";

const SideBar = ({ searchRef, isOpen, chartData, setChartData, constellationView, setConstellationView }) => {
  return (
    <div>
      {!constellationView.open ? (
        <SideBarDefault
          setConstellationView={setConstellationView}
          searchRef={searchRef}
          isOpen={isOpen}
          chartData={chartData}
          setChartData={setChartData}
        />
      ) : ( 
        <SidebarConstellation setConstellationView={setConstellationView} constellationView={constellationView}/>
      )}
    </div>
  );
};

export default SideBar;

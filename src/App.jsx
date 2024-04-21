import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyles } from "./mapStyles";
import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Searchbar from "./components/Searchbar";
import Chatbot from "./components/Chatbot";

import { Circle } from "./components/shapes/Circle";

function App() {
  const [chartData, setChartData] = useState([]);
  const [sideBar, setSidebar] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const handleButtonClick = () => {
    setShowChatbot((showChatbot) => !showChatbot);
  };

  const searchRef = useRef();

  const INITIAL_CENTER = { lat: 41.1897, lng: -96.0627 };

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [radius, setRadius] = useState(43000);

  const changeCenter = (newCenter) => {
    if (!newCenter) return;
    setCenter({ lng: newCenter.lng(), lat: newCenter.lat() });
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <SideBar
        searchRef={searchRef}
        isOpen={sideBar}
        chartData={chartData}
        setChartData={setChartData}
      ></SideBar>
      <Searchbar
        searchRef={searchRef}
        sideBar={sideBar}
        changeSidebar={setSidebar}
        setChartData={setChartData}
      ></Searchbar>
      <div className="h-screen w-full">
        <Chatbot
          showChatbot={showChatbot}
          handleButtonClick={handleButtonClick}
        />
        <Map
          onClick={() => {
            setSidebar(false);
            setShowChatbot(false);
          }}
          disableDefaultUI={true}
          gestureHandling="greedy"
          defaultZoom={9}
          minZoom={4}
          defaultCenter={center}
          styles={mapStyles}
        >
          <Circle
            radius={radius}
            center={center}
            onRadiusChanged={setRadius}
            onCenterChanged={changeCenter}
            strokeColor={"#0c4cb3"}
            strokeOpacity={1}
            strokeWeight={3}
            fillColor={"#3b82f6"}
            fillOpacity={0.3}
            editable
            draggable
          />
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;

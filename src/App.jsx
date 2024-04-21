import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyles } from "./mapStyles";
import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Searchbar from "./components/Searchbar";
import Chatbot from "./components/Chatbot";
import { Circle } from "./components/shapes/Circle";

function App() {
  const [chartData, setChartData] = useState({});
  const [sideBar, setSidebar] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [constellationView, setConstellationView] = useState({
    name: "",
    visibility: "",
    information: "",
    best_viewing_equipment: "",
    open: false,
  });

  const handleButtonClick = () => {
    setShowChatbot((showChatbot) => !showChatbot);
  };

  const searchRef = useRef();

  const INITIAL_CENTER = { lat: 34.07, lng: -118.439 };

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [radius, setRadius] = useState(43000);
  const numPoints = 4;

  const calculateCirclePoints = (center, radius, numPoints) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const lat = center.lat + (radius * Math.sin(angle)) / 111111;
      const lng =
        center.lng +
        (radius * Math.cos(angle)) /
          (111111 * Math.cos((center.lat * Math.PI) / 180));
      points.push({ lat, lng });
    }
    return points;
  };

  const changeCenter = (newCenter) => {
    if (!newCenter) return;
    setCenter({ lng: newCenter.lng(), lat: newCenter.lat() });
  };

  const points = calculateCirclePoints(center, radius, numPoints); 
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <SideBar
        searchRef={searchRef}
        isOpen={sideBar}
        chartData={chartData}
        setChartData={setChartData}
        constellationView={constellationView}
        setConstellationView={setConstellationView}
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
          setShowChatbot={setShowChatbot}
          handleButtonClick={handleButtonClick}
        />
        <Map
          onClick={() => {
            setSidebar(false);
            setShowChatbot(false);
            setConstellationView({ ...constellationView, open: false });
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
            strokeColor={"#b3b00c"}
            strokeOpacity={1}
            strokeWeight={3}
            fillColor={"#c7b512"}
            fillOpacity={0.3}
          />
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;

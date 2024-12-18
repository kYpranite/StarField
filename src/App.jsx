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
        setCenter={setCenter}
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
          defaultCenter={INITIAL_CENTER}
          styles={mapStyles}
        >
          <Circle
            radius={20000}
            center={center}
            strokeColor={"#b3b00c"}
            strokeOpacity={1}
            strokeWeight={3}
            fillColor={"#c7b512"}
            fillOpacity={0.3}
            onClick={() => {
              setSidebar(false);
              setShowChatbot(false);
              setConstellationView({ ...constellationView, open: false });
            }}
          />
        </Map>
      </div>
    </APIProvider>
  );
}

export default App;

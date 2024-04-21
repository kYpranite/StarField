import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyles } from "./mapStyles";
import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Searchbar from "./components/Searchbar";
import Chatbot from "./components/Chatbot";

function App() {
  const [chartData, setChartData] = useState([]);
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
  const center = { lat: 34.7128, lng: -118.006 };

  const searchRef = useRef();
  console.log(sideBar);
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
        ></Map>
      </div>
    </APIProvider>
  );
}

export default App;

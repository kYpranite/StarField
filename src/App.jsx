import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyles } from "./mapStyles";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Searchbar from "./components/Searchbar";
function App() {
  const [chartData, setChartData] = useState([]);
  const [sideBar, setSidebar] = useState(false);
  const center = { lat: 34.7128, lng: -118.006 };
  console.log(sideBar);
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <SideBar isOpen={sideBar} chartData={chartData} setChartData={setChartData}></SideBar>
      <Searchbar sideBar={sideBar} changeSidebar={setSidebar} setChartData={setChartData}></Searchbar>
      <div className="h-screen w-full">
        <Map
          onClick={() => {
            setSidebar(false);
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

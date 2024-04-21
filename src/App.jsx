import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { mapStyles } from "./mapStyles";
import { useRef, useState } from "react";
import SideBar from "./components/SideBar";
import Searchbar from "./components/Searchbar";
import Chatbot from "./components/Chatbot";
import { Marker } from "@react-google-maps/api";
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

  const radius = 40000;
  const INITIAL_CENTER = { lat: 34.07, lng: -118.439 };
  const [center, setCenter] = useState(INITIAL_CENTER);

  const calculateCirclePoints = (center, radius, numPoints) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const lat = center.lat + (radius * Math.sin(angle)) / 111111;
      const long =
        center.lng +
        (radius * Math.cos(angle)) /
          (111111 * Math.cos((center.lat * Math.PI) / 180));
      points.push({ lat, long });
    }
    return points;
  };

  const calculateBest = async () => {
    const points = calculateCirclePoints(center, radius, 4);
    let max = 0;
    let location = null;
    let values = {
      coords: [],
      times: [],
      temperatures: [],
      humidity: [],
      cloud: [],
      wind: [],
    };

    for (let point of points) {
      await fetch("http://localhost:5000/api/weathers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(point),
      })
        .then((response) => response.json())
        .then((data) => {
          values["times"].push(...data["times"]);
          values["temperatures"].push(...data["temperatures"]);
          values["humidity"].push(...data["humidity"]);
          values["cloud"].push(...data["cloud"]);
          values["wind"].push(...data["wind"]);
          values["coords"].push(point);
        });
    }

    await fetch("http://localhost:5000/api/predicts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        temperatures: values["temperatures"],
        humidity: values["humidity"],
        cloud: values["cloud"],
        wind: values["wind"],
      })
        .then((response) => response.json())
        .then((data) => {
          let i = 0;
          for (let percent of data.predictions) {
            if (percent > max) {
              max = percent;
              location = values.coords[i];
            }
            i++;
          }
        }),
    });
    console.log(location);
    console.log(max);
  };

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
        setCenter={setCenter}
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

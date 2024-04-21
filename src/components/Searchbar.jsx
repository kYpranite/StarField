import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";

import "./SearchbarStyles.css";

export default function Searchbar({ searchRef, changeSidebar, setChartData }) {
  const map = useMap();
  formatted_data = {}

  for time in enumerate(response["hourly"]["time"]):
    formatted_data[time] = {    
      "time": time,
      "cloud": response[time]["cloud_cover"],
      "humidity": response[time]["relative_humidity_2m"],
      "windSpeed": response[time]["wind_speed_10m"],
      "visibility": response[time]["visibility"],
    }

  // const dummyData = {
  //   "02-20-24": [
  //     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
  //     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 5 },
  //     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 45 },
  //     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 21 },
  //     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
  //     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
  //   ],
  //   "02-21-24": [
  //     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
  //     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 20 },
  //     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 40 },
  //     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 30 },
  //     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 20 },
  //     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
  //   ],
  //   "02-22-24": [
  //     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 2 },
  //     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 25 },
  //     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 30 },
  //     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 35 },
  //     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
  //     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
  //   ],
  // };
  function handleSidebar() {
    changeSidebar((sidebar) => !sidebar);
  }

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "USA" },
    fields: ["geometry", "name"],
  };

  useEffect(() => {
    if (!map) return;
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log(place)
      console.log(place.name); // place holder, place object contains lat and long of entered address
      const latitude = await place.geometry.location.lat();
      const longitude = await place.geometry.location.lng();
      searchRef.current.scrollIntoView({ behavior: "smooth" });
      setChartData(dummyData);
      map.panTo({lat:latitude,lng:longitude});
    });
  }, [map]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Enter Location"
      onFocus={handleSidebar}
      className="fixed top-[2%] left-[4%] p-6 text-sm border-gray-400 border-[1px] bg-gray-700 text-white w-[25%] h-11 z-30 rounded-3xl drop-shadow-md focus:outline-none focus:rounded-xl"
    />
  );
}

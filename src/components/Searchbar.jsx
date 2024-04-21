import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { calculateBest } from "../utils/bestPoints";

import { grabChartData } from "../utils/dataPoints";

import "./SearchbarStyles.css";

export default function Searchbar({
  searchRef,
  changeSidebar,
  setChartData,
  setCenter,
}) {
  const map = useMap();

  function handleSidebar() {
    changeSidebar(true);
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

      const latitude = await place.geometry.location.lat();
      const longitude = await place.geometry.location.lng();
      const center = { lat: latitude, lng: longitude };

      let { location, max } = await calculateBest(center, 20000, 4);
      setCenter(location);
      map.panTo(location);
      searchRef.current.scrollIntoView({ behavior: "smooth" });
      setChartData(await grabChartData(latitude, longitude));
    });
  }, [map]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Enter Location"
      onFocus={handleSidebar}
      className="fixed top-[2%] left-[3%] p-6 text-sm border-gray-400 border-[1px] bg-gray-700 text-white w-[25%] h-11 z-30 rounded-3xl drop-shadow-md focus:outline-none focus:rounded-xl"
    />
  );
}

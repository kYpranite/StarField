import { useState, useEffect, useRef } from "react";
import "./SearchbarStyles.css"


export default function Searchbar() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "USA" },
    fields: ["geometry"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place }); // place holder, place object contains lat and long of entered address
    });
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search"
      className="fixed top-4 left-6 p-6 text-sm bg-gray-700 text-white w-[25%] h-11 z-10 rounded-3xl drop-shadow-md focus:outline-none focus:rounded-md focus:rounded-b-sm"
    />
  );
}

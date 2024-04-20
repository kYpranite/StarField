import { useEffect, useRef } from "react";
import "./SearchbarStyles.css";



export default function Searchbar({changeSidebar}) {
  function handleSidebar(event){
    changeSidebar((sidebar)=> !sidebar);
    console.log("focus");
  }
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
      placeholder="Enter Location"
      onFocus={handleSidebar}
      className="fixed top-6 left-[4%] p-6 text-sm border-gray-400 border-[1px] bg-gray-700 text-white w-[25%] h-11 z-30 rounded-3xl drop-shadow-md focus:outline-none focus:rounded-md focus:rounded-b-sm"
    />
  );
}

import { APIProvider, Map } from "@vis.gl/react-google-maps"
import { mapStyles } from "./mapStyles"
import Searchbar from "./components/Searchbar"
function App() {
  const center = {lat: 34.7128, lng: -118.0060}
  return (
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <Searchbar></Searchbar>
      <div className="h-screen w-full">
        <Map disableDefaultUI={true} gestureHandling="greedy" defaultZoom={9} defaultCenter={center} styles={mapStyles}></Map>
      </div>
    </APIProvider>
  )
}

export default App;

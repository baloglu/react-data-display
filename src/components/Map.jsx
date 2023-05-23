import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MainMap({locations }) {

    let api_key = '';
    console.log(locations)
    if (import.meta.env.DEV) {
        console.log('env is DEV')
        api_key = import.meta.env.VITE_MAPS_API_KEY
    } 
    if (import.meta.env.PROD) {
        console.log('env is DEV')
    }
    
    const { isLoaded } = useLoadScript({googleMapsApiKey: api_key})
    const center = useMemo(()=> (locations[0]), [locations[0]]) // { lat: 38.44, lng: 27.16 } izmir
    if(!isLoaded) return <div>Loading map</div>
    return (
        <GoogleMap zoom={2} center={center} mapContainerClassName="map-container">
            {
                locations.map((location, index) => {
                    return <Marker key={index} position={location} />
                })
            }
            </GoogleMap>
    )
}

export default MainMap;
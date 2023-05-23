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
    
    if(!isLoaded) return <div>Loading map</div>
    return (
        <GoogleMap zoom={10} center={{ lat: 38.44, lng: 27.16 }} mapContainerClassName="map-container">
            {
                locations.map(location => {
                    return <Marker position={location} />
                })
            }
            </GoogleMap>
    )
}

export default MainMap;
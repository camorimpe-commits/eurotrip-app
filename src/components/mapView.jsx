import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 48.8566,
    lng: 2.3522
};

export default function MapView() {
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
                <Marker position={{ lat: 48.8566, lng: 2.3522 }} />
            </GoogleMap>
        </LoadScript>
    );
}

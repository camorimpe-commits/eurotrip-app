import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView() {
    return (
        <MapContainer
            center={[48.8566, 2.3522]}
            zoom={5}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[48.8566, 2.3522]}>
                <Popup>Paris</Popup>
            </Marker>
        </MapContainer>
    );
}

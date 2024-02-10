/* eslint-disable react/prop-types */
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Import your custom marker icon image
import customMarkerIcon from '/marker-icon.png';

// Define custom icon
const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [28, 40], // Adjust the size of the icon as per your requirement
  iconAnchor: [16, 32], // Adjust the anchor point if needed
});

const Map = ({ lat, lng, address }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

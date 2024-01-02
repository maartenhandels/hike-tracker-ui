import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the Leaflet marker icon images
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const placesData = [
  {id: 1, name: 'Place A', lat: 43.297977, lon: -1.970416},
  {id: 2, name: 'Place B', lat: 40.7128, lon: -74.0060},
  // Add more places as needed
];

// Adjust the default icon with proper image URLs and anchor points
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // Adjusted anchor point for the icon
  popupAnchor: [1, -34], // Optional: Adjust if your popup's position needs tweaking
});

// Set the default icon for all Leaflet markers
L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const [mapCenter, setMapCenter] = useState([37.7749, -122.4194]); // Default center
  const [mapZoom, setMapZoom] = useState(5); // Default zoom level

  return (
      <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{
            height: '100vh',
            width: '100vw',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=es"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {placesData.map((place) => (
            <Marker key={place.id} position={[place.lat, place.lon]}>
              <Popup>{place.name}</Popup>
            </Marker>
        ))}
      </MapContainer>
  );
};

export default MapView;

// MapView.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS for proper styling

const placesData = [
  { id: 1, name: 'Place A', lat: 43.297977, lon: -1.970416},
  { id: 2, name: 'Place B', lat: 40.7128, lon: -74.0060 },
  // Add more places as needed
];

const MapView = () => {
  const [mapCenter, setMapCenter] = useState([37.7749, -122.4194]); // Default center
  const [mapZoom, setMapZoom] = useState(5); // Default zoom level

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      style={{ height: '100vh', width: '100vw', borderRadius: '8px', border: '1px solid #ccc' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=es" // Add ?lang=es for Spanish
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

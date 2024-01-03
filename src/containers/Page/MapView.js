import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Adjust the default icon with proper image URLs and anchor points
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // Adjusted anchor point for the icon
  popupAnchor: [1, -34], // Optional: Adjust if your popup's position needs tweaking
});

// Set the default icon for all Leaflet markers
L.Marker.prototype.options.icon = DefaultIcon;

const MapView = (places) => {
  const [mapCenter, setMapCenter] = useState([16, -38]); // Default center
  const [mapZoom, setMapZoom] = useState(3); // Default zoom level

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
        {places.places.map((place, index) => (
            <Marker key={index}
                    position={[place.coordinates?.latitude,
                      place.coordinates?.longitude]}
            >
              <Popup>{place.title}</Popup>
            </Marker>
        ))}
      </MapContainer>
  );
};

export default MapView;

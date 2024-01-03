import React, {useState} from 'react';

import classes from "./MapModal.module.css"

import Modal from 'react-modal';
import {
    Autocomplete,
    GoogleMap,
    LoadScript,
    Marker
} from '@react-google-maps/api';
import Button from "../Button/Button";

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0'
};

Modal.setAppElement('#root'); // '#root' corresponds to the id of your root div in index.html

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const googleMapsLibraries = ["places"];

const MapModal = ({isOpen, onClose, onMapClick}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [map, setMap] = useState(null);

  const handleLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const handlePlaceSelect = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setSelectedPlace({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      map.panTo(new window.google.maps.LatLng(place.geometry.location.lat(),
          place.geometry.location.lng()));
    }
  };

  const handleMapClick = (event) => {
    onMapClick({lat: event.latLng.lat(), lng: event.latLng.lng()});
    onClose(); // Close the modal on map click
  };

  const confirmSelection = () => {
    if (selectedPlace) {
      onMapClick(selectedPlace);
      onClose();
    }
  };

  return (
      <LoadScript googleMapsApiKey={apiKey} libraries={googleMapsLibraries}>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
          <div className={classes.ModalContent}>
            <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceSelect}
                          className={classes.Control}>
              <input
                  type="text"
                  placeholder="Search location"
              />
            </Autocomplete>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedPlace || {lat: -34.397, lng: 150.644}}
                zoom={10}
                onLoad={setMap}
                onClick={handleMapClick}
            >
              {selectedPlace && <Marker
                  position={selectedPlace}/>} {/* Show marker at the selected place */}
            </GoogleMap>
            <Button onClick={confirmSelection} className={classes.Control}>Confirm
              Location</Button>
          </div>
        </Modal>
      </LoadScript>
  );
};

export default MapModal;

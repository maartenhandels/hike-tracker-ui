import React, {useState} from 'react';

import classes from "./CoordinateInput.module.css";

import MapModal from '../../MapModal/MapModal';
import Button from "../../Button/Button";

const CoordinateInput = ({label, coordinates, onChangeHandler}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMapClick = (latLng) => {
    console.log("Clicked coordinates are: " + latLng);
    onChangeHandler(latLng);
    setIsModalOpen(false);
  };

  return (
      <>
        <div className={classes.CoordinateInput}>
          <label htmlFor="coordinates" className={classes.Label}>{label}</label>
          <div className={classes.InputWrapper}>
            <Button onClick={() => setIsModalOpen(true)}>Abrir Mapa</Button>
            <input
                type="text"
                name="coordinates"
                value={`${coordinates.lat},${coordinates.lng}`}
                className={classes.Input}
                readOnly
            />
          </div>
        </div>
        <MapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
                  onMapClick={handleMapClick}/>
      </>
  );
};

export default CoordinateInput;

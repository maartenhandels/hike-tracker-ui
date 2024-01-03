import React, {useState} from "react";

import classes from "./NewHikeForm.module.css"

import FormInput from "../FormElements/FormInput/FormInput";
import Button from "../Button/Button";
import CoordinateInput from "../FormElements/CoordinateInput/CoordinateInput";

const NewHikeForm = () => {

  const [hikeTitle, setHikeTitle] = useState("");
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});

  const handleCreateHike = () => {
    const data = {
      "title": hikeTitle,
      "coordinates": {
        "latitude": coordinates.lat,
        "longitude": coordinates.lng
      }
    };
    console.log("Data is: " + JSON.stringify(data));
    submitForm(data);
  }

  const submitForm = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/hikes/create',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      if (responseJson) {
        console.log("Response: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
      <div className={classes.Form}>
        <div className={classes.Fields}>
          <FormInput
              name="hikeTitle"
              label="Titulo de la Excursión"
              type="text"
              value={hikeTitle}
              onChangeHandler={setHikeTitle}
          />
          <CoordinateInput label="Coordenadas"
                           coordinates={coordinates}
                           onChangeHandler={setCoordinates}/>
        </div>
        <div>
          <Button className={classes.Button}
                  onClick={handleCreateHike}>Guardar</Button>
        </div>
      </div>
  );
}

export default NewHikeForm;

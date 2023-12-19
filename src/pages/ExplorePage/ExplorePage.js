//import React from "react";
import Page from "../../containers/Page/Page";
import React, { useState } from 'react';
import MapView from "../../containers/Page/MapView";
import NewHikeForm from '../../components/NewHikeForm/NewHikeForm';

const MainPage = () => {
  const [places, setPlaces] = useState([]);

  const handleAddPlace = (newPlace) => {
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  return (
    <Page>
        <div>
        <h1 style={{textAlign:'center'}}>Mis excursiones</h1>
        <MapView placesData={places} />
        <NewHikeForm NewHikeForm={handleAddPlace} />
        </div>
    </Page>
  );
};

export default MainPage;


//import React from "react";
import Page from "../../containers/Page/Page";
import React, {useEffect, useState,} from 'react';
import MapView from "../../containers/Page/MapView";
import NewHikeForm from '../../components/NewHikeForm/NewHikeForm';

const ExplorePage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces().then(r => setPlaces(r));
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await fetch(
          'http://localhost:8080/api/v1/hikes/all', {
            method: 'GET'
          });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json.data ? json.data : [];
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }

  const handleAddPlace = (newPlace) => {
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  return (
      <Page>
        <div>
          <h1 style={{textAlign: 'center'}}>Mis excursiones</h1>
          <MapView places={places}/>
          <NewHikeForm NewHikeForm={handleAddPlace}/>
        </div>
      </Page>
  );
};

export default ExplorePage;


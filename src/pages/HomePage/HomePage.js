//ort React from "react";
import Page from "../../containers/Page/Page";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCoffee, faMoon } from '@fortawesome/free-solid-svg-icons';
import mountainImage from './IMG_4586.jpg';


const HomePage = () => {
  const [greeting, setGreeting] = useState('');
  const [icon, setIcon] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every minute
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Determine the greeting based on the current time
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Buenos Días');
      setIcon(<FontAwesomeIcon icon={faSun} size="1x" />);
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Buenas Tardes!');
      setIcon(<FontAwesomeIcon icon={faCoffee} size="1x" />);
    } else {
      setGreeting('Buenas Noches');
      setIcon(<FontAwesomeIcon icon={faMoon} size="1x" />);
    }
  }, [currentTime]);

  return (
    <Page>
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px', padding: '20px' }}>
        <h1 style={{ fontSize: '3em' }}>
          {greeting} {icon && icon}
        </h1>
      </div>
      <div style={{ width: '100%', background: '#196400', padding: '20px', alignItems: 'center' }}>
        <p style={{ color: 'white', textAlign: 'center', fontWeight:'bold', fontSize: '2em'}}>Revisa tu última excursión a XXX</p>
      </div>
      <div>
        <img
          src={mountainImage}
          alt="Mountain"
          style={{ width: '100%', height: 'auto', paddingTop: '10px' }}
        />
      </div>
    </div>
    </Page>
  );
};

export default HomePage;

//const HomePage = () => (
   // <Page>
     //   <h1>Hello World!</h1>
    //</Page>
//);

//export default HomePage;

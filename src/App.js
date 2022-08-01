import React from 'react';
import DayPicture from './components/DayPicture';
import Map from "./components/fireBall/Map"
import MarsRover from './components/Mars/MarsRover';
import VideoEarth from './components/VideoEarth';


const App = () => {
  return (
    <div>
      <h1>Nasa App</h1>
      <VideoEarth />
      <DayPicture />
      <Map />
      <MarsRover />

      <div className='space'></div>
    </div>
  );
};

export default App;
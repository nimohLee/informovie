import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import DailyBoxOffice from './components/DailyBoxOffice';
import WeeklyBoxOffice from './components/WeeklyBoxOffice';
const App = () => {

  return (
    <div className="App"> 
      <DailyBoxOffice/>
      <WeeklyBoxOffice/>
    </div>
  );

  }

export default App;

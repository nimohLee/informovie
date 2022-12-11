import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import DailyBoxOffice from './components/DailyBoxOffice';
import WeeklyBoxOffice from './components/WeeklyBoxOffice';
import { communication } from './functions/communication';
const App = () => {
  const fetchData = async () =>{
    const result = await communication.getMovieList("범죄도시");
    console.log(result);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App"> 
      <DailyBoxOffice/>
      <WeeklyBoxOffice/>
    </div>
  );

  }

export default App;

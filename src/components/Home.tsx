import React from 'react'
import SearchForm from './SearchForm'
import logo from "../inform_logo.png";
import { useState, useEffect } from 'react';
import { dailyOrWeekly } from '../types/literal';
import { DailyBoxOfficeType, WeeklyBoxOfficeType } from '../types/fetchResult';
import { communication } from '../functions/communication';
import DailyBoxOffice from './DailyBoxOffice';
import WeeklyBoxOffice from './WeeklyBoxOffice';

const Home = () => {
  const [selectedBoxOffice, setSelectedBoxOffice] = useState<dailyOrWeekly>("daily");
  const [dailyBoxOffice, setDailyBoxOffice] = useState<DailyBoxOfficeType>({} as DailyBoxOfficeType);
  const [weeklyBoxOffice, setWeeklyBoxOffice] = useState<WeeklyBoxOfficeType>({} as WeeklyBoxOfficeType);
  
  const fetchDailyBoxOffice = async () => {
    try{
      const result = await communication.getDaliyBoxOffice();
      setDailyBoxOffice({...dailyBoxOffice, ...result.data});
    }catch(err){
      alert("문제가 발생했습니다. 나중에 다시 시도해주세요");
      console.error(err);
    }
    
  }

  const fetchWeeklyBoxOffice = async () => {
    try{
      const result = await communication.getWeeklyBoxOffice();
      setWeeklyBoxOffice({...weeklyBoxOffice, ...result.data});
    }catch(err){
      alert("문제가 발생했습니다. 나중에 다시 시도해주세요");
      console.error(err);
    }
    
  }
  useEffect(()=>{
      fetchDailyBoxOffice();
      fetchWeeklyBoxOffice();
  },[])
  return (
    <main>
        <section>
            <img src={logo} alt="logo"/>
            <SearchForm/>
        </section>
        <aside>
          
          {
            selectedBoxOffice==="daily"
            ?<DailyBoxOffice {...dailyBoxOffice}/>
            :<WeeklyBoxOffice {...weeklyBoxOffice}/>
          }
        </aside>
    </main>
  )
}

export default Home
"use strict";
import React, {useEffect, useState} from 'react'
import { communication } from '../functions/communication';
import { WeeklyBoxOfficeType } from '../types/fetchResult';

const WeeklyBoxOffice = () => {
  const [weeklyBoxOffices, setWeeklyBoxOffices] = useState<WeeklyBoxOfficeType>({} as WeeklyBoxOfficeType);
  const fetchData = async () =>{
      const result = await communication.getWeeklyBoxOffice();
      if(result.data){
        setWeeklyBoxOffices({...weeklyBoxOffices, ...result.data});
      }
  };
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
   {weeklyBoxOffices &&
          weeklyBoxOffices?.boxOfficeResult?.weeklyBoxOfficeList.map((movies)=>{
            return (
            <div key={movies.rnum}>
              <h5>{movies.rank}</h5>
              <h6>{movies.movieNm}</h6>
            </div>
            )
          })
          }
    </div>
  )
}

export default WeeklyBoxOffice;
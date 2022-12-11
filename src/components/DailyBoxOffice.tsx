"use strict";
import React, {useEffect, useState} from 'react'
import { communication } from '../functions/communication';
import { DailyBoxOfficeType } from '../types/fetchResult';

const DailyBoxOffice = () => {
  const [dailyBoxOffices, setDailyBoxOffices] = useState<DailyBoxOfficeType>({} as DailyBoxOfficeType);
  const fetchData = async () =>{
      const result = await communication.getDaliyBoxOffice();
      if(result.data){
        setDailyBoxOffices({...dailyBoxOffices, ...result.data});
      }
  };
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
   {dailyBoxOffices &&
          dailyBoxOffices?.boxOfficeResult?.dailyBoxOfficeList.map((movies)=>{
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

export default DailyBoxOffice
"use strict";
import React from "react";
import { WeeklyBoxOfficeType } from "../types/fetchResult";

const WeeklyBoxOffice: React.FC<WeeklyBoxOfficeType> = (movies) => {
    
    setTimeout(()=>{
        console.log(movies);
    },2000)
    return (
        <div>
            {movies &&
                movies?.boxOfficeResult?.weeklyBoxOfficeList.map((movie) => {
                    return (
                        <div key={movie.rnum}>
                            <h5>{movie.rank}</h5>
                            <h6>{movie.movieNm}</h6>
                        </div>
                    );
                })}
        </div>
    );
};

export default WeeklyBoxOffice;

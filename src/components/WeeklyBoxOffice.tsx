"use strict";
import React from "react";
import { WeeklyBoxOfficeType } from "../types/fetchResult";
import commons from '../functions/commons';
const WeeklyBoxOffice: React.FC<WeeklyBoxOfficeType> = (movies) => {
    return (
        <div>
            {movies &&
                movies?.boxOfficeResult?.weeklyBoxOfficeList.map((movie) => {
                    return (
                        <div key={movie.rnum}>
                            <h5>{movie.rank}</h5>
                            <h5>{movie.movieNm}</h5>
                            <h6>{movie.openDt}</h6>
                            <h6>누적 관객 {commons.stringToNumberFormat(movie.audiAcc)}명</h6>
                        </div>
                    );
                })}
        </div>
    );
};

export default WeeklyBoxOffice;

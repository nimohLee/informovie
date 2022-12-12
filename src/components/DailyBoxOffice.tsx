"use strict";
import React from "react";
import { DailyBoxOfficeType } from "../types/fetchResult";

const DailyBoxOffice: React.FC<DailyBoxOfficeType> = (movies) => {
    return (
        <div>
            {movies &&
                movies?.boxOfficeResult?.dailyBoxOfficeList.map((movie) => {
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

export default DailyBoxOffice;

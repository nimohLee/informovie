"use strict";
import React from "react";
import { WeeklyBoxOfficeType } from "../types/fetchResult";
import commons from '../functions/commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../model/Icons';
const WeeklyBoxOffice: React.FC<WeeklyBoxOfficeType> = (movies) => {
    const icons = new Icons();
    return (
        <div className='mt-4'>
            {movies &&
                movies?.boxOfficeResult?.weeklyBoxOfficeList.map((movie) => {
                    return (
                        <div key={movie.rnum} className='mb-3 pb-3"'>
                            <div className='grid grid-cols-10 ml-5 items-center h-10'>
                            <span className='col-span-1 mr-8'>{movie.rank}</span>
                            <span className='col-span-7 mr-2'>{movie.movieNm}</span>
                            
                            <div className='col-span-2'>
                                {
                                        parseInt(movie.rankInten) === 0 ?
                                        <FontAwesomeIcon icon={icons.arrowBarIcon} className="text-white"/>:
                                        (
                                            parseInt(movie.rankInten) > 0 ?
                                        <div className='flex items-center'><FontAwesomeIcon icon={icons.arrowUpIcon} className="text-red-500 text-2xl"/><div className=''>{movie.rankInten}</div></div> :
                                        <div className='flex flex items-center'><FontAwesomeIcon icon={icons.arrowDownIcon} className="text-blue-500 text-2xl"/></div>
                                        )
                                    }
                            </div>
                            </div>
                            <div className='text-sm pl-8 mt-2.5'>누적 관객 {commons.stringToNumberFormat(movie.audiAcc)}명</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default WeeklyBoxOffice;

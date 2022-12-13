"use strict";
import React from "react";
import { DailyBoxOfficeType } from "../types/fetchResult";
import commons from '../functions/commons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DailyBoxOffice: React.FC<DailyBoxOfficeType> = (movies) => {
    library.add(fas);
    const arrowUp: IconLookup = { prefix: 'fas', iconName: 'caret-up' }
    const arrowUpDefinition: IconDefinition = findIconDefinition(arrowUp);

    const arrowDown: IconLookup = { prefix: 'fas', iconName: 'caret-down' }
    const arrowDownDefinition: IconDefinition = findIconDefinition(arrowDown);

    const bar: IconLookup = { prefix: 'fas', iconName: 'minus'}
    const barDefinition: IconDefinition = findIconDefinition(bar);
    
    return (
        <div className='mt-4'>
            {movies &&
                movies?.boxOfficeResult?.dailyBoxOfficeList.map((movie) => {
                    return (
                        <div key={movie.rnum} >
                            <div className='flex ml-5 items-center h-10'>
                                <div className='mr-8 '>{movie.rank}</div>
                                <div className='mr-2'>{movie.movieNm}</div>
                                {
                                    parseInt(movie.rankInten) === 0 ? 
                                    <FontAwesomeIcon icon={bar} className="text-white"/>:
                                    (
                                        parseInt(movie.rankInten) > 0 ?
                                    <div className='flex items-center'><FontAwesomeIcon icon={arrowUp} className="text-red-500 text-2xl"/><div className=''>{movie.rankInten}</div></div> :
                                    <div className='flex flex items-center'><FontAwesomeIcon icon={arrowDown} className="text-blue-500 text-2xl"/></div>
                                    )
                                }
                                
                            </div>
                            <h6>금일 관객 {commons.stringToNumberFormat(movie.audiCnt)}명</h6>
                        </div>
                    );
                })}
        </div>
    );
};

export default DailyBoxOffice;

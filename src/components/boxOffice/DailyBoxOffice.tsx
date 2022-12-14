"use strict";
import React from "react";
import { DailyBoxOfficeType } from "../../types/fetchResult";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../model/Icons';
const DailyBoxOffice: React.FC<DailyBoxOfficeType> = (movies) => {
    const icons = new Icons();
    return (
        <div className='mt-4'>
            {movies &&
                movies?.boxOfficeResult?.dailyBoxOfficeList.map((movie) => {
                    return (
                        <div key={movie.rnum} className='mb-2'>
                            <div className='grid grid-cols-10 ml-5 items-center h-10'>
                                <div className='mr-8 col-span-1'>{movie.rank}</div>
                                <div className='mr-2 col-span-7'>{movie.movieNm}</div>
                                <div className='col-span-2'>
                                {
                                    parseInt(movie.rankInten) === 0 ? 
                                    <FontAwesomeIcon icon={icons.arrowBarIcon} className="text-white"/>:
                                    (
                                        parseInt(movie.rankInten) > 0 ?
                                    <div className='flex items-center'><FontAwesomeIcon icon={icons.arrowUpIcon} className="text-red-500 text-2xl"/>
                                    <span className='ml-2'>{movie.rankInten}</span>
                                    </div> :
                                    <div className='flex flex items-center'><FontAwesomeIcon icon={icons.arrowDownIcon} className="text-blue-500 text-2xl"/>
                                    <span className='ml-2'>{movie.rankInten}</span>
                                    </div>
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default DailyBoxOffice;

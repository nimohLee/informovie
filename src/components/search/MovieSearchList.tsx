"use strict";
import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { MovieListItems } from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";
import { useInView } from "react-intersection-observer"
import commons from '../../functions/commons';
import "../../css/star.css"
import SearchForm from './SearchForm';

const MovieSearchList = () => {
    const [searchResult, setSearchResult] = useState([{
        actor: "",
        director: "",
        image: "",
        link: "",
        pubDate: "",
        subtitle: "",
        title: "",
        userRating: ""
    }]);    const location = useLocation();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [ref, inView] = useInView();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [isResultExist, setIsResultExist] = useState(false);
    const bindResult = (result:any) =>{
        const data = result.data.items as MovieListItems;
        const copy = [...searchResult];
        copy.pop();
        copy.push(...data);
        setSearchResult(copy);
    }

    useEffect(()=>{
        setLoading(false)
    },[searchResult])

    const fetchData = useCallback(async () => {
        setLoading(true);
        try{
            const result = await communication.getMovieList(parsed.searchValue, page);
            console.log(result.data.items.length);
            if(result.data.items.length===0)
                setIsResultExist(false);
            if(result.data.items.length<10){
                setIsResultExist(true);
                setIsDone(true);
            }
            if(!isDone) 
                bindResult(result);
        }catch(err){
            console.error(err);
            alert("통신에 문제가 발생하였습니다. 잠시 후에 다시 시도해주세요.")
        }
    },[page])
    
    useEffect(() => {
            fetchData();
    }, [fetchData]);

    useEffect(()=>{
        if (inView && !loading){
            setPage(prevState => prevState+10);
        }
    },[inView, loading]);

    const ratingToPercent = (ratio:string)=> {
        const score = parseInt(ratio) * 10;
        return score;
   }

    return (
        <div>
            <div className='border-b pb-5  flex justify-center flex-col items-center mt-32'>
                <SearchForm/>
                <div className='text-white text-5xl mt-5 mb-4'>검색결과</div>
            </div>
            <div className='overflow-y-scroll flex flex-wrap justify-evenly'>
            {
                searchResult[0]?.actor!==""&&searchResult?.map((movie, index) => {
                    return (
                        <div key={index} className="flex text-black border-solid border relative ml-20 mt-20 bg-white h-48 pb-2 rounded-lg" style={{width:"600px"}}>
                            {movie.image===""||
                            <img src={movie.image} className="w-30 -translate-x-5 -translate-y-8 border border-b"></img>
                            }
                            <div className='px-8'>
                                <div className='pt-4 text-2xl'>{movie?.title.replace(/<\/?b>/g,"")}</div>
                                <div className='text-gray-500'>{movie.subtitle}, {movie.pubDate}</div>
                                <div>감독 {commons.removeVerticalBar(movie?.director,"movie")}</div>
                                <div className=''>{commons.removeVerticalBar(movie?.actor, "movie",",")}</div>
                                <span className="absolute">
                                    <div className="star-ratings-fill space-x-2 text-lg" style={{width: `${ratingToPercent(movie.userRating)}%`}}>
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                    <div className="star-ratings-base space-x-2 text-lg">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                    </div>
                                </span>
                                <span className='relative left-32 top-0.5 ml-2 font-bold '>{movie.userRating}</span>
                        </div>
                    </div>
                    );
                })
            }
                {
                    isDone?
                    <div className='text-white'>마지막 영화입니다.</div>
                    :
                    <div ref={ref}>...loading</div>
                }
                </div>
        </div>
        
    );
};

export default MovieSearchList;

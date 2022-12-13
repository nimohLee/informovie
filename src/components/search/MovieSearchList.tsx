"use strict";
import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { MovieListItems } from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";
import { useInView } from "react-intersection-observer"
import commons from '../../functions/commons';


const MovieSearchList = () => {
    const [searchResult, setSearchResult] = useState([{
        actor: "",
        director: "",
        image: "",
        link: "",
        pubDate: "",
        subtitle: "",
        title: "",
        userRating: "",
    }]);
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [ref, inView] = useInView();

    const parsed = queryString.parse(location.search) as QueryStringValues;
    
    const bindResult = (result:any,callback:any) =>{
        const data = result.data.items as MovieListItems;
        const copy = [...searchResult,...data];
        setSearchResult(copy);
        callback();
    }

    const fetchData = useCallback(async () => {
        setLoading(true);
        try{
            const result = await communication.getMovieList(parsed.searchValue, page);
            if(result.data.items.length<10){
                setIsDone(true);
            }
            if(!isDone)    
            bindResult(result,()=>{
                    setLoading(false);    
                });
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

    
    return (
        <div>
            
        {
            searchResult?.map((movie, index) => {
                return (
                    <div key={index}>
                        <img src={movie?.image}></img>
                        {/* 영화 제목이 <b> </b> 태그로 감싸져 있어 정규표현식 사용하여 공백으로 치환 */}
                        <h3>{movie?.title?.replace(/<\/?b>/g,"")}</h3>
                        <h4>{commons.removeVerticalBar(movie?.actor)}</h4>
                        <h4>{commons.removeVerticalBar(movie?.director)}</h4>
                        <h5>{movie?.userRating}</h5>
                    </div>
                );
            })
        }
            {
                isDone?
                <h4>마지막 영화입니다.</h4>
                :
                <div ref={ref}>...loading</div>
            }
            </div>
        
    );
};

export default MovieSearchList;

"use strict";
import React, { useEffect, useState } from 'react';
import { communication } from '../functions/communication';
import { MovieListResult } from '../types/fetchResult';
const SearchList = () => {
  const [searchResult, setSearchResult] = useState<MovieListResult>({} as MovieListResult);
  const fetchData = async () =>{
    const result = await communication.getMovieList("범죄도시");
    setSearchResult({...searchResult,...result.data});
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      {searchResult&& 
      searchResult?.items?.map((movie, index)=>{
        return (
        <div key={index}>
        <img src={movie.image}></img>
        </div>
        )
      })
      }
    </div>
  )
}

export default SearchList;
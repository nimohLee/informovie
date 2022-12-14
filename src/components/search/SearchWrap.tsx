"use strict";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import MovieSearchList from './MovieSearchList';
import CompanySearchList from './CompanySearchList'
import PeopleSearchList from './PeopleSearchList'
import {searchOption} from "../../types/literal";
import { QueryStringValues } from "../../types/searchType";
import SearchForm from './SearchForm';

const SearchWrap = () => {
  const location = useLocation();
  const [searchOption, setSearchOption] = useState<searchOption>();
  const parsed = queryString.parse(location.search) as QueryStringValues;
  const setOptionInState = () =>{
   setSearchOption(parsed.searchOption);
  }
  useEffect(()=>{
  setOptionInState();
  },[]);
  
  return(
    <main>
         <div className='border-b pb-5  flex justify-center flex-col lg:items-center mt-20'>
                <div className='text-white text-5xl mt-5 mb-20 ml-10'>검색결과</div>
                <div className='absolute top-24 md:top-32 right-36 md:mr-20 lg:right-96'>
                <SearchForm/>
                </div>
                
          </div>
    {
      searchOption === "title"?
      <MovieSearchList/>
      :
      (
        searchOption === "company"?
        <CompanySearchList/>
        :<PeopleSearchList/>
      )
    }
    </main>
  )
}

export default SearchWrap;
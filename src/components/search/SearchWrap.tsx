"use strict";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import MovieSearchList from './MovieSearchList';
import CompanySearchList from './CompanySearchList'
import PeopleSearchList from './PeopleSearchList'
import {searchOption} from "../../types/literal";
import { QueryStringValues } from "../../types/searchType";

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
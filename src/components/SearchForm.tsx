"use strict";
import React from 'react'
import { useState } from 'react';
import commons from '../functions/commons';

type searchOptionType = "openDt" | "title" | "people";

const SearchForm = () => {
  const [searchOption, setSearchOption] = useState<searchOptionType>();
  const currentYear = commons.getCurrentYear();
  let startYear = 1960;
  const startSelectYears = Array.from(new Array(60),( val, index) => currentYear - index); 
  const [endYears,setEndYears] = useState<Array<number>>(Array.from(new Array(60),( val, index) => currentYear - index)); 

  const handleSearchSelect = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    switch(e.target.value){
      case "title":
        setSearchOption("title");
        break;
      case "people":
        setSearchOption("people");  
        break;
      case "openDt":
        setSearchOption("openDt");  
        break;
    }
  }

  const handleYearSelect = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
    startYear = +e.target.value;
    const filterYear = startSelectYears.filter(year => year > startYear);
    setEndYears(filterYear);
  }

  return (
    <article>
      <form action="/search">
      <div>
        <div>
            <label htmlFor="value"></label>
            <select name="searchOption" id="search-option" onChange={handleSearchSelect}>
              <option value="title">
                제목
              </option>
              <option value="people">
                영화인
              </option>
              <option value="openDt">
                개봉연도
              </option>
            </select>
          </div>
          {
            searchOption === "openDt"
            ?
            <div>
            <select name="startYear" id="" onChange={handleYearSelect}>
            {
            startSelectYears.map((year, index)=>{
              return(
                      <option key={`year${index}`} value={year}>{year}</option>
              )
            })
            }
            </select>
            <select name="endYear" id="">
            {
            endYears.map((year, index)=>{
              return(
                      <option key={`year${index}`} value={year}>{year}</option>
              )
            })
            }
            </select>
            </div>
            :<div>
              <label htmlFor="value"></label>
              <input type="text" name="searchValue" id="value" placeholder=''/>
            </div>
          }
          <input type="submit" value="검색" />
      </div>
      </form>
    </article>
  )
}

export default SearchForm;
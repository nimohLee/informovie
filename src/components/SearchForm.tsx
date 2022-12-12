"use strict";
import React from 'react'
import { useState } from 'react';
import commons from '../functions/commons';

const SearchForm = () => {
  const [searchOption, setSearchOption] = useState(false);
  const currentYear = commons.getCurrentYear();
  let startYear = 1960;
  const startSelectYears = Array.from(new Array(60),( val, index) => currentYear - index); 
  const [endYears,setEndYears] = useState<Array<number>>(Array.from(new Array(60),( val, index) => currentYear - index)); 
 
  const handleSearchSelect = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    if(e.target.value === "openDt")
      setSearchOption(true);
    else
      setSearchOption(false);
  }

  const handleYearSelect = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
    startYear = +e.target.value;
    const filterYear = startSelectYears.filter(year => year > startYear);
    setEndYears(filterYear);
  }

  return (
    <article>
      <form action="">
      <div>
        <div>
            <label htmlFor="value"></label>
            <select name="search-option" id="search-option" onChange={handleSearchSelect}>
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
            searchOption
            ?
            <div>
            <select name="" id="" onChange={handleYearSelect}>
            {
            startSelectYears.map((year, index)=>{
              return(
                      <option key={`year${index}`} value={year}>{year}</option>
              )
            })
            }
            </select>
            <select name="" id="">
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
              <input type="text" id="value" placeholder=''/>
            </div>
          }
      </div>
      </form>
    </article>
  )
}

export default SearchForm;
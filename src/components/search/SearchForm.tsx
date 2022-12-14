"use strict";
import React from 'react'
import { useState } from 'react';
import commons from '../../functions/commons';

type searchOptionType = "openDt" | "title" | "people" | "company";

const SearchForm = () => {
  const [searchOption, setSearchOption] = useState<searchOptionType>();
  const currentYear = commons.getCurrentYear();
  let startYear = 1960;
  const startSelectYears = Array.from(new Array(60),( val, index) => currentYear - index); 
  const [endYears,setEndYears] = useState<Array<number>>(Array.from(new Array(60),( val, index) => currentYear - index)); 

  const handleSearchSelect = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    const searchValue = e.target.value as searchOptionType;
    setSearchOption(searchValue);
  }

  const handleYearSelect = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
    startYear = +e.target.value;
    const filterYear = startSelectYears.filter(year => year > startYear);
    setEndYears(filterYear);
  }

  return (
    <article className=''>
      <form action="/search" >
      <div>
        <div className='flex -translate-x-5'>
            <label htmlFor="value"></label>
            <select className='p-2' name="searchOption" id="search-option" onChange={handleSearchSelect}>
              <option value="title">
                제목
              </option>
              <option value="people">
                영화인
              </option>
              <option value="company">
                영화사
              </option>
              <option value="openDt">
                개봉연도
              </option>
            </select>
          
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
            :<div className='bg-white'>
              <label htmlFor="value"></label>
              <input type="text" className="py-3 pl-2 pr-20 focus:outline-0 " name="searchValue" id="value" placeholder='검색어를 입력하세요' required/>
            </div>
          }
          <input type="submit" value="검색" className='bg-red-500 px-8 text-center text-white hover:bg-red-400 hover:duration-75'/>
          
      </div>
      </div>
      </form>
    </article>
  )
}

export default SearchForm;
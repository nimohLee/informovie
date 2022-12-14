"use strict";
import React from 'react'

const SearchForm = () => {
  return (
    <article className='absolute left-0'>
      <form action="/search" >
        <div className='flex flex-col md:flex-row -translate-x-32 md:-translate-x-44 lg:-translate-x-5 absolute left-0 '>
            <label htmlFor="value"></label>
            <select className='p-2 border border-b' name="searchOption" id="search-option">
              <option value="title">
                제목
              </option>
              <option value="people">
                영화인
              </option>
              <option value="company">
                영화사
              </option>
            </select>
          <div className='bg-white'>
              <label htmlFor="value"></label>
              <input type="text" className="lg:py-3 lg:pl-2 lg:pr-20 py-3 pl-2 pr-16 focus:outline-0 " name="searchValue" id="value" placeholder='검색어를 입력하세요' required/>
            </div>
          <input type="submit" value="검색" className='bg-red-500 px-8 text-center text-white hover:bg-red-400 hover:duration-75'/>
      </div>
      </form>
    </article>
  )
}

export default SearchForm;
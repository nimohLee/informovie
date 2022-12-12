import React from 'react';
import App from './App';
import commons from './functions/commons';
import { communication } from './functions/communication';

describe("통신 테스트",()=>{
  test("일별 박스오피스 가져오기", async () => {
    // given
    // when
    const result = await communication.getDaliyBoxOffice();
    // then
    expect(result.status).toBe(200);
  });

  test("월별 박스오피스 가져오기", async () => {
    // given
    // when
    const result = await communication.getWeeklyBoxOffice();
    // then
    expect(result.status).toBe(200);
  });

test("영화 정보 가져오기", async () => {
    // given
    // when
    const result = await communication.getMovieInfo("22221032");
    // then
    expect(result.status).toBe(200);
  });
  
test("영화사 목록 가져오기", async () => {
    // given
    // when
    const result = await communication.getCompanyList("22221032");
    // then
    expect(result.status).toBe(200);
  });

  test("영화사 정보 가져오기", async () => {
    // given
    // when
    const result = await communication.getCompanyInfo("22221032");
    // then
    expect(result.status).toBe(200);
  });

  test("영화인 목록 검색해서 가져오기", async () => {
    // given
    // when
    const result = await communication.getMovieManList("peopleNm","22221032");
    // then
    expect(result.status).toBe(200);
  });

  test("영화인 정보 가져오기", async () => {
    // given
    // when
    const result = await communication.getMovieManInfo("22221032");
    // then
    expect(result.status).toBe(200);
  });
  
  // test("영화 검색", async ()=>{
  //   const result = await communication.getMovieList("범죄도시");
  //   console.log(result);
  // })
});

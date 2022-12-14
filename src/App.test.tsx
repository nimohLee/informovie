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

  test("오늘 값 가져오기", async () => {
    // given
    // when
    const result = commons.getDate("yesterDay");
    console.log(result);
    // then
    expect(result).toBe("20221213");
  });

  test("주별 박스오피스 가져오기", async () => {
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
    const result = await communication.getMovieManList("마동석");
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
});

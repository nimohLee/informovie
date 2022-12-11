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

  test("영화 검색", async ()=>{
    const result = await communication.getMovieList("범죄도시");
    console.log(result);
  })
});

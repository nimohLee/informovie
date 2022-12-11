import React from 'react';
import App from './App';
import commons from './functions/commons';
import { communication } from './functions/communication';

describe("통신 테스트",()=>{
  test("오늘 날짜 가져오기", () =>{
    const date = commons.getYesterday();
    console.log(date);
  })
  
  test("일별 박스오피스 가져오기", async () => {
    // given
    // when
    const result = await communication.getDaliyBoxOffice();
    // then
    
    expect(result.status).toBe(200);
  })
});

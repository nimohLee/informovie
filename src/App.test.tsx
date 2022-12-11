import React from 'react';
import App from './App';
import commons from './model/commons';
import { Communication } from './model/Communication';

describe("통신 테스트",()=>{
  test("오늘 날짜 가져오기", () =>{
    const date = commons.getToday();
    console.log(date);
  })
  
  test("일별 박스오피스 가져오기", async () => {
    // given
    const communication = new Communication("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json");
    const today = commons.getToday();
    // when
    const result = await communication.getDailyBoxOffice(today);
    // then
    expect(result.status).toBe(200);
  })
});

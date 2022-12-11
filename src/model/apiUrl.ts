const apis = {
    getDailyBoxOffice : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    getWeeklyBoxOffice : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?weekGb=0",
    getMovieList(select: string, value: string){
        return `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?${select}=${value}`;
    },
    getMovieListByDate(start: string, end: string){
        return `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?openStartDt=${start}&openEndDt=${end}`;
    },
    getMovieDetail(movieCode: string){
        return `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?movieCd=${movieCode}`
    }

}

export default apis;
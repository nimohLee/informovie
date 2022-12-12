import commons from '../functions/commons';
import { movieListSelect, companyListSelect, moviemanSelect } from '../types/literal';

class ApiUrl {
    private basicUrl = "http://www.kobis.or.kr/kobisopenapi/webservice/rest";
    private naverUrl = "/api/v1/search/movie.json"
    private APIKEY = process.env.REACT_APP_API_KEY;
    private static instance:ApiUrl;
    static getInstance(){
        return this.instance || (this.instance = new this());
    }
    getDailyBoxOfficeUrl():string{
        return `${this.basicUrl}/boxoffice/searchDailyBoxOfficeList.json?key=${this.APIKEY}&targetDt=${commons.getYesterday()}`;
    }
    getWeeklyBoxOfficeUrl():string{
        return `${this.basicUrl}/boxoffice/searchWeeklyBoxOfficeList.json?key=${this.APIKEY}&targetDt=${commons.getYesterday()}&weekGb=0`;
    }
    getMovieListUrl():string{
        return `${this.naverUrl}`;
    }
    getMovieListByDateUrl(start: string, end: string):string{
        return `${this.naverUrl}/movie/searchMovieList.json?key=${this.APIKEY}&openStartDt=${start}&openEndDt=${end}`;
    }
    getMovieInfoUrl(movieCode: string):string{
        return `${this.basicUrl}/movie/searchMovieInfo.json?key=${this.APIKEY}&movieCd=${movieCode}`;
    }
    getCompanyListUrl(value: string):string{
        return `${this.basicUrl}/company/searchCompanyList.json?key=${this.APIKEY}&companyNm=${value}`;
    }
    getCompanyInfoUrl(companyCode: string):string{
        return `${this.basicUrl}/company/searchCompanyInfo.json?key=${this.APIKEY}&companyCd=${companyCode}`;
    }
    getMovieManListUrl(select: moviemanSelect, value: string):string{
        return `${this.basicUrl}/people/searchPeopleList.json?key=${this.APIKEY}&${select}=${value}`;
    }
    getMovieManInfoUrl(manCode: string):string{
        return `${this.basicUrl}/people/searchPeopleInfo.json?key=${this.APIKEY}&peopleCd=${manCode}`;
    }
}
export default ApiUrl;
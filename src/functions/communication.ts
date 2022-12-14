import ApiUrl from '../model/ApiUrl';
import axios from 'axios';
import { AxiosReturnType } from '../types/axiosType';

const communication = {
    async getDaliyBoxOffice():AxiosReturnType{        
            return await axios.get(ApiUrl.getInstance().getDailyBoxOfficeUrl());
    },
    async getWeeklyBoxOffice():AxiosReturnType{      
            return await axios.get(ApiUrl.getInstance().getWeeklyBoxOfficeUrl());
    },
    async getMovieList(value: string, page: number):AxiosReturnType{
           const result = await axios.get(ApiUrl.getInstance().getMovieListUrl(),
           {
                headers : {
                    "X-Naver-Client-Id" : process.env.REACT_APP_NAVER_CLIENT_ID,
                    "X-Naver-Client-Secret" : process.env.REACT_APP_NAVER_SECRET
                },
                params:{
                    query: value,
                    display: 10,
                    start: page
                }
            });
            return result;
            
    },
    async getMovieListByDate(start: string, end: string):AxiosReturnType{
           return await axios.get(ApiUrl.getInstance().getMovieListByDateUrl(start, end));
    },
    async getMovieInfo(movieCode: string):AxiosReturnType{
            return await axios.get(ApiUrl.getInstance().getMovieInfoUrl(movieCode));
    },
    async getCompanyList(value: string):AxiosReturnType{
            return await axios.get(ApiUrl.getInstance().getCompanyListUrl(value));
    },
    async getCompanyInfo(companyCode: string):AxiosReturnType{
            return await axios.get(ApiUrl.getInstance().getCompanyInfoUrl(companyCode));
    },
    async getMovieManList(value: string):AxiosReturnType{
            return await axios.get(ApiUrl.getInstance().getMovieManListUrl(value));
    },
    async getMovieManInfo(manCode: string):AxiosReturnType{
            return await axios.get(ApiUrl.getInstance().getMovieManInfoUrl(manCode));
    }

}
export { communication };
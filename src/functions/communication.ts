import ApiUrl from '../model/ApiUrl';
import axios from 'axios';
import { movieListSelect, companyListSelect, moviemanSelect } from '../types/literal';
import { CommunicationError, AxiosReturnType } from '../types/axiosType';

const communication = {
    async getDaliyBoxOffice():AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getDailyBoxOfficeUrl());
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getWeeklyBoxOffice():AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getWeeklyBoxOfficeUrl());
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getMovieList(value: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getMovieListUrl(),{
                headers : {
                    "X-Naver-Client-Id" : process.env.REACT_APP_NAVER_CLIENT_ID,
                    "X-Naver-Client-Secret" : process.env.REACT_APP_NAVER_SECRET
                },
                params:{
                    query: value
                }
            });
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getMovieListByDate(start: string, end: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getMovieListByDateUrl(start, end));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getMovieInfo(movieCode: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getMovieInfoUrl(movieCode));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getCompanyList(select: companyListSelect, value: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getCompanyListUrl(select, value));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getCompanyInfo(companyCode: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getCompanyInfoUrl(companyCode));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getMovieManList(select: moviemanSelect, value: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getMovieManListUrl(select, value));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    },
    async getMovieManInfo(manCode: string):AxiosReturnType{
        try{
            const result= await axios.get(ApiUrl.getInstance().getMovieManInfoUrl(manCode));
            return result;
        }catch(error){
            const err = error as CommunicationError;
            return err;
        }
    }

}
export { communication };
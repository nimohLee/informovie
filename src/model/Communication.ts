import axios from 'axios';
import commons from './commons';
class Communication{
    private url: string;
    constructor(url: string){
        this.url = url;
    }
    async getDailyBoxOffice(today: string){
        try{
            const result= await axios.get(`${this.url}?key=${process.env.API_KEY}&targetDt=${today}`);
            return result;
        }catch(e){
            alert("서버 접속에 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.");
            throw new Error("서버 접속에 문제가 발생하였습니다");
        }
        
    }

}
export { Communication };
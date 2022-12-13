const commons = {
    getToday(){
        const date = new Date();
        const today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
        return today.toString();
    },
    getLastWeek(){
        const date = new Date();
        const dayToday = date.getDay();
        // 요일이 항상 일요일 기준으로 하기 위하여 오늘 요일값을 빼줌 ( 영화진흥위원회 api가 최근 일자에는 안 들어옴) 
        date.setDate(date.getDate() - dayToday);
        return `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`.toString();
    },
    getYesterday(){
        const date = new Date();
        const today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()-2}`;
        return today.toString();
    },
    getCurrentYear(){
        return new Date().getFullYear();
    },
    stringToNumberFormat(convert: string|number){
        return new Intl.NumberFormat().format(+convert);
    },
    removeVerticalBar(originalString:string,replaceChar?:string){
        return originalString.replace(/\|/g,replaceChar||" ");
    }
}
export default commons;
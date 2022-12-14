type wantDate = "yesterDay" | "lastWeek";

function getLastWeek(date:Date, dayToday:number) {
    // 요일이 항상 일요일 기준으로 하기 위하여 오늘 요일값을 빼줌 ( 영화진흥위원회 api가 최근 일자에는 안 들어옴) 
    date.setDate(date.getDate() - dayToday);
    return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
}

function getYesterday(date:Date) {
    return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() - 1}`;
}

const commons = {
    getDate(wantDateInfo:wantDate){
        const date = new Date();
        let result:string;
        if(wantDateInfo === "lastWeek")
            result= getLastWeek(date, date.getDay());
        else
            result = getYesterday(date);
        return result;
    },
    getCurrentYear(){
        return new Date().getFullYear();
    },
    stringToNumberFormat(convert: string|number){
        return new Intl.NumberFormat().format(+convert);
    },
    removeVerticalBar(originalString:string,replaceChar?:string){
        const result = originalString.replace(/\|/g,replaceChar||"");
        return result.slice(0, originalString.length - 1);
    },
    getStarRatio(average:string){
        return Math.floor(+average / 2);
    }
}
export default commons;


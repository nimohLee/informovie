interface DailyBoxOfficeType {
    boxOfficeResult: {
        dailyBoxOfficeList: [{
            rnum: string;
            movieCode: string;
            movieNm: string;
            openDt: string;
            audiCnt: string;
            audiChange: string;
            audiAcc: string;
            boxofficeType: string;
            rank: string;
            rankInten: string;
            rankOldAndNew: string;
        }];
    };
}

interface WeeklyBoxOfficeType {
    boxOfficeResult: {
        weeklyBoxOfficeList: Array<{
            boxofficeType: string;
            showRange: string;
            yearWeekTime: string;
            rnum: string;
            rank: string;
            rankInten: string;
            rankOldAndNew: string;
            movieCd: string;
            movieNm: string;
            openDt: string;
            audiCnt: string;
            audiInten: string;
            audiAcc: string;
        }>;
    };
}

interface MovieListResult {
    items: [{
            actor: string;
            director: string;
            image: string;
            link: string;
            pubDate: string;
            subtitle: string;
            title: string;
            userRating: string;
        }];
    
}

interface MovieInfoResult {
    movieInfoResult: {
        movieInfo: {
            movieCd: string;
            movieNm: string;
            movieNmEn: string;
            movieNmOg: string;
            ptdYear: string;
            showTm: string;
            openDt: string;
            prdtStatNm: string;
            typeNm: string;
            genre: [{ genreNm: string }];
            actors: [
                {
                    cast: string;
                    castEn: string;
                    peopleNm: string;
                    peopleNmEn: string;
                }
            ];
            nations: [{ nationNm: string }];
            directors: [{ peopleNm: string; peopleNmEn: string }];
            staffs: [
                { peopleNm: string; peopleNameEn: string; staffRoleNm: string }
            ];
            companys: [
                {
                    companyCd: string;
                    companyNm: string;
                    companyNmEn: string;
                    companyPartNm: string;
                }
            ];
        };
    };
}

interface ComponyListResult {
    companyListResult: {
        companyList: [
            {
                ceoNm: string;
                companyCd: string;
                companyNm: string;
                companyNmEn: string;
                companyPartNames: string;
                filmoNames: string;
            }
        ];
    };
}

interface ComponyInfoResult {
    companyInfoResult: {
        companyInfo: {
            ceoNm: string;
            companyCd: string;
            companyNm: string;
            companyNmEn: string;
        };
    };
}

interface PeopleListResult {
    peopleListResult: {
        peopleList: [
            {
                filmoNames: string;
                peopleCd: string;
                peopleNm: string;
                peopleNmEn: string;
                repRoleNm: string;
            }
        ];
    };
}
interface PeopleInfoResult {
    peopleInfoResult: {
        peopleInfo: [
            {
                filmos: [{
                    movieCd: string;
                    movieNm: string;
                    moviePartNm: string;
                }];
                peopleCd: string;
                peopleNm: string;
                peopleNmEn: string;
                repRoleNm: string;
                sex: string;
            }
        ];
    };
}

export { DailyBoxOfficeType, WeeklyBoxOfficeType, MovieListResult, MovieInfoResult, ComponyListResult, ComponyInfoResult, PeopleListResult, PeopleInfoResult};

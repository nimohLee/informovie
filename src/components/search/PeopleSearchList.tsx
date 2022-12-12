"use strict";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { PeopleListResult} from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";

const PeopleSearchList = () => {
    const location = useLocation();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [searchResult, setSearchResult] = useState<PeopleListResult>({} as PeopleListResult);
    
    const fetchData = async () => {
        const result = await communication.getMovieManList(parsed.searchValue);
        setSearchResult({ ...searchResult, ...result.data });
    };

    useEffect(() => {
       fetchData();
    }, []);
    
    return (
        <div>
            {
                searchResult && 
                    searchResult?.peopleListResult?.peopleList.map((person, index)=>{
                        return (
                            <div key={index}>
                                {person.peopleNm}
                                {person.repRoleNm}
                            </div>
                        )
                    })
            }
        </div>
    );
};

export default PeopleSearchList;

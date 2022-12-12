"use strict";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { CompanyListResult } from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";

const CompanySearchList = () => {
    console.log("왜와")
    const location = useLocation();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [searchResult, setSearchResult] = useState<CompanyListResult>({} as CompanyListResult);
    
    const fetchData = async () => {
        const result = await communication.getCompanyList(parsed.searchValue);
        console.log(result);
        setSearchResult({ ...searchResult, ...result.data });
    };

    useEffect(() => {
       fetchData();
    }, []);
    
    return (
        <div>
            {/* {
                searchResult && 
                    searchResult?.companyListResult.companyList?.map((company, key)=>{
                       return(
                        <div key={company.companyCd}>
                        {company.companyNm}
                        {company.ceoNm}
                        {company.filmoNames}
                        </div>
                        )
                    })
                    
            } */}
        </div>
    );
};

export default CompanySearchList;

"use strict";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { CompanyListResult } from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";
import { Card } from "react-bootstrap";

const CompanySearchList = () => {
    const location = useLocation();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [searchResult, setSearchResult] = useState<CompanyListResult>(
        {} as CompanyListResult
    );
    const [isFilmoOn, setIsFilmoOn] = useState<string>("");
    const fetchData = async () => {
        try{
            const result = await communication.getCompanyList(parsed.searchValue);
            setSearchResult({ ...searchResult, ...result.data });
        }catch(err){
            console.error(err);
            alert("통신에 문제가 발생했습니다. 잠시 후에 다시 시도해주세요.")
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showFilmo = (companyCd: string) => {
        if (isFilmoOn === companyCd) setIsFilmoOn("");
        else setIsFilmoOn(companyCd);
    };

    return (
        <div className='h-screen'>
            <div className='h-full' style={{backgroundColor: "rgba( 255, 255, 255, 0.5)"}}>
                {searchResult &&
                    searchResult?.companyListResult?.companyList?.map(
                        (company) => {
                            return (
                                <Card
                                    style={{ width: "1005" }}
                                    key={company.companyCd}
                                >
                                    <Card.Body>
                                        <Card.Title>
                                            {company.companyNm}{" "}
                                            {company.companyNmEn &&
                                                `(${company?.companyNmEn})`}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {company.companyPartNames}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <p>대표이사 {company.ceoNm}</p>
                                            <span className='text-red-400 cursor-pointer' onClick={()=>showFilmo(company.companyCd)}>필모그래피 보기</span>

                                        </Card.Text>
                                        {isFilmoOn === company.companyCd && (
                                            <div>
                                                {company.filmoNames
                                                    ? company.filmoNames
                                                    : "필모그래피가 없습니다"}
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            );
                        }
                    )}
            </div>
        </div>
    );
};

export default CompanySearchList;

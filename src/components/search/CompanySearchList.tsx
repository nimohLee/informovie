"use strict";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { CompanyListResult } from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CompanySearchList = () => {
    const location = useLocation();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [searchResult, setSearchResult] = useState<CompanyListResult>(
        {} as CompanyListResult
    );
    const [isFilmoOn, setIsFilmoOn] = useState<string>("");
    const fetchData = async () => {
        const result = await communication.getCompanyList(parsed.searchValue);
        console.log(result);
        setSearchResult({ ...searchResult, ...result.data });
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
                        (company, key) => {
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

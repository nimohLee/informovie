"use strict";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { communication } from "../../functions/communication";
import { PeopleListResult} from "../../types/fetchResult";
import { QueryStringValues } from "../../types/searchType";
import commons from '../../functions/commons';

const PeopleSearchList = () => {
    const location = useLocation();
    const parsed = queryString.parse(location.search) as QueryStringValues;
    const [searchResult, setSearchResult] = useState<PeopleListResult>({} as PeopleListResult);
    const [isLoading, setIsLoading] = useState(false);
    const [isFilmoOn, setIsFilmoOn] = useState<string>("");
    const fetchData = async () => {
        try{
            const result = await communication.getMovieManList(parsed.searchValue);
            setSearchResult({ ...searchResult, ...result.data });
        }catch(err){
            console.error(err);
            alert("통신 중 에러가 발생하였습니다. 잠시 후 다시시도해주세요.");
        }
    };

    useEffect(() => {
        setIsLoading(true);
       fetchData();
       setIsLoading(false);
    }, []);
    
    const showFilmo = (personCd:string) =>{
        if(isFilmoOn === personCd)
            setIsFilmoOn("");
        else setIsFilmoOn(personCd);
    }
    return (
        <div className=''>
            <div className='h-full' style={{backgroundColor: "rgba( 255, 255, 255, 0.5)"}}>
            {
                !isLoading
                ? 
                    searchResult?.peopleListResult?.peopleList.map((person, index)=>{
                        return (
                            <Card style={{ width: '100%',margin:"0 auto", paddingLeft:'40px' }} key={person.peopleCd}>
                                 <Card.Body>
                                    <Card.Title>{person.peopleNm} { person.peopleNmEn&&`(${person?.peopleNmEn})`}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{person.repRoleNm}</Card.Subtitle>
                                <Card.Text>
                                    <span className='text-red-400 cursor-pointer' onClick={()=>showFilmo(person.peopleCd)}>필모그래피 보기</span>
                                    {/* {commons.removeVerticalBar(person.filmoNames," , ")} */}
                                </Card.Text>
                                {isFilmoOn === person.peopleCd && <div>{commons.removeVerticalBar(person.filmoNames,"other",", ")}</div>}
                            </Card.Body>
                          </Card>
                        )
                    })
                    :<h2>Loading...</h2>
            }
            </div>
        </div>
    );
};
export default PeopleSearchList;
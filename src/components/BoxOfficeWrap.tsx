import React, {useState, useEffect} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import 'bootstrap/dist/css/bootstrap.css';
import DailyBoxOffice from "./DailyBoxOffice";
import WeeklyBoxOffice from "./WeeklyBoxOffice";
import { DailyBoxOfficeType, WeeklyBoxOfficeType } from "../types/fetchResult";
import { communication } from '../functions/communication';

function BoxOfficeWrap() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState<DailyBoxOfficeType>(
        {} as DailyBoxOfficeType
    );
    const [weeklyBoxOffice, setWeeklyBoxOffice] = useState<WeeklyBoxOfficeType>(
        {} as WeeklyBoxOfficeType
    );

    const fetchDailyBoxOffice = async () => {
        try {
            const result = await communication.getDaliyBoxOffice();
            setDailyBoxOffice({ ...dailyBoxOffice, ...result.data });
        } catch (err) {
            alert("문제가 발생했습니다. 나중에 다시 시도해주세요");
            console.error(err);
        }
    };

    const fetchWeeklyBoxOffice = async () => {
        try {
            const result = await communication.getWeeklyBoxOffice();
            setWeeklyBoxOffice({ ...weeklyBoxOffice, ...result.data });
        } catch (err) {
            alert("문제가 발생했습니다. 나중에 다시 시도해주세요");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchDailyBoxOffice();
        fetchWeeklyBoxOffice();
    }, []);

    return (
        <div>
            <h3>Box Office</h3>
            <Tabs defaultActiveKey="daily" id="boxoffice-tab" fill>
                <Tab eventKey="daily" title="일일">
                    <DailyBoxOffice {...dailyBoxOffice} />
                </Tab>
                <Tab eventKey="weekly" title="주간">
                    <WeeklyBoxOffice {...weeklyBoxOffice} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default BoxOfficeWrap;

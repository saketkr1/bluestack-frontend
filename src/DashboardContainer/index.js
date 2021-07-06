import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TabsComponent from './TabsComponent';
import { jsonData } from './jsonData';
import './styles.css';

function DashboardContainer() {
    const [tab, setTab] = useState("upcoming");
    const [json, setJson] = useState(jsonData.body);
    const [data, setData] = useState([]);
    const { t } = useTranslation();

    let d = new Date();
    let date = d.getDate();
    let upcomingData, liveData, pastData;

    useEffect(() => {
        upcomingData = json.map(item => {
            if (new Date(parseInt(item['createdOn'])) > d) {
                return item;
            } return null;
        }).filter(Boolean);
        setData(upcomingData);
    }, []);


    function handleClick(e) {
        setTab(e.target.title);
        if (e.target.title === 'upcoming') {
            upcomingData = json.map(item => {
                if (new Date(parseInt(item['createdOn'])) > d) {
                    return item;
                } return null;
            }).filter(Boolean);
            setData(upcomingData);
        }
        else if (e.target.title === 'past') {
            pastData = json.map(item => {
                if (new Date(parseInt(item['createdOn'])) < d) {
                    return item;
                } return null;
            }).filter(Boolean);
            setData(pastData);
        } else {
            liveData = json.map(item => {
                if (new Date(parseInt(item['createdOn'])).getDate() === date) {
                    return item;
                } return null;
            }).filter(Boolean);
            setData(liveData);
        }
    }

    function updateData(updatedTime, currentItem) {
        const updatedData = json.map(data => {
            if (data['name'] === currentItem['name']) {
                return { ...data, createdOn: updatedTime }
            }
            return data;
        });
        setJson(updatedData);
    }


    return (
        <div>
            <button title="upcoming" className="tabButton pl-1 pr-2 py-2" onClick={handleClick}>{t('upcoming')} </button>
            <button title="live" className="tabButton pl-1 pr-2 py-2" onClick={handleClick}>{t('live')} </button>
            <button title="past" className="tabButton pl-1 pr-2 py-2" onClick={handleClick}>{t('past')} </button>
            <TabsComponent active={tab} data={data} updateData={updateData} />
        </div>
    )
}


export default DashboardContainer


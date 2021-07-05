import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TabsComponent from './TabsComponent';
import { jsonData } from './jsonData';
import './styles.css';

function DashboardContainer() {
    const [tab, setTab] = useState("upcoming");
    const { t } = useTranslation();
    let d = new Date();
    let date = d.getDate();
    let upData = jsonData.body.map(item => {
        if (new Date(parseInt(item['createdOn'])) > d) {
            return item;
        } return null;
    }).filter(Boolean);

    let liveData = jsonData.body.map(item => {
        if (new Date(parseInt(item['createdOn'])).getDate() === date) {
            return item;
        } return null;
    }).filter(Boolean);

    let pastData = jsonData.body.map(item => {
        if (new Date(parseInt(item['createdOn'])) < d) {
            return item;
        } return null;
    }).filter(Boolean);
    
    function handleClick(e) {
        setTab(e.target.title);
        if(e.target.title === 'upcoming') {
            setData(upData);
        }
       else if(e.target.title === 'past') {
            setData(pastData);
        } else {
            setData(liveData);
        }
        console.log(e);
    }

    const [data, setData] = useState(upData);

    return (
        <div>
             <button title="upcoming"  className="tabButton pl-1 pr-2 py-2"  onClick={handleClick}>{t('upcoming')} </button>
             <button title="live"  className="tabButton pl-1 pr-2 py-2"  onClick={handleClick}>{t('live')} </button>
             <button title="past"  className="tabButton pl-1 pr-2 py-2"  onClick={handleClick}>{t('past')} </button>
             <TabsComponent active={tab} data={data}/>
        </div>
    )
}


export default DashboardContainer


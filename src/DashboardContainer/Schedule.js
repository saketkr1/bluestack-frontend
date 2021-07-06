import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Calender from 'react-calendar';

import cal from '../assets/calendar.png';

function Schedule(props) {
    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(prevState => !prevState);
    }

    const handleOnChange = date => {
        const currentTime = new Date(date).getTime() + 5.5 * (3600000);
        props.updateData(currentTime, props.item);
        setVisible(false);
    }
    return (
        <div>
            <img alt='calendar' className="ml-5" src={cal}
                style={{ width: "2.5em", height: "2.5em", float: "left" }} />
            <button onClick={handleClick} variant="light" style={{
                background: "white", color: "#57698a",
                textDecoration: "none", border: "0.4em solid white", marginTop: "5px", fontSize: "0.9em"
            }}
            ><p className="ml-0 mx-0 my-0"> {t('scheduleAgain')}</p>
            </button>
            {visible && <Calender onChange={handleOnChange}
            />}
        </div>)
}

export default Schedule


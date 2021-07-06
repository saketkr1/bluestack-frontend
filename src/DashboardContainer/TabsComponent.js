import React from 'react'
import { useTranslation } from 'react-i18next';
import { Table, ButtonGroup } from 'react-bootstrap';

import Price from './Price';
import Schedule from './Schedule';
import file from '../assets/file.png';
import stats from '../assets/statistics-report.png';

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function TabsComponent(props) {

    const { t } = useTranslation();
    const getDate = date => {
        return ' ' + new Date(date).getFullYear() + ', ' + new Date(parseInt(date)).getDate();
    }

    const d = new Date();
    return (
        <div>
            <Table responsive hover style={{ color: "#57698a", backgroundColor: "white", border: "1px solid lightgrey", tableLayout: "auto" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f1f1f4" }}>
                        <th>{t('date')}</th>
                        <th>{t('campaign')}</th>
                        <th>{t('view')}</th>
                        <th>{t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index ) => (<tr key={index}>
                        <td style={{ fontSize: "0.95em" }} >

                            {t(months[new Date(parseInt(item['createdOn'])).getMonth()])}
                            {getDate(item['createdOn'])}
                            <br />
                            {Math.abs(new Date(parseInt(item['createdOn'])).getDate() - d.getDate())}
                            {' days '}
                            {new Date(parseInt(item['createdOn'])) > d ? t('ahead') : t('ago')}

                        </td>
                        <td style={{ width: "24%" }}>
                            <img alt='game_url' className="mr-3" src={item['image_url']}
                                style={{ width: "3em", height: "3em", float: "left" }} />
                            <div><p className="my-0"><b> {item['name']} </b></p>
                                <sub> {item['region']} </sub> </div>
                        </td>
                        <td style={{ width: "19%" }} >
                            <Price item={item} />
                        </td>
                        <td style={{ width: "46%" }} > <ButtonGroup style={{ display: "flex" }}>
                            <img alt='csv' className="mr-3" src={file}
                                style={{ width: "2.2em", height: "2.2em", float: "left" }} />
                            <p className="ml-6 mx-0 my-0"> CSV</p>
                            <img alt='report' className="ml-5" src={stats}
                                style={{ width: "2.2em", height: "2.2em", float: "left" }} />
                            <p className="ml-2 mx-0 my-0">{t('l')}</p>
                            <Schedule item={{ name: item['name'], time: item['createdOn'] }} updateData={props.updateData} />
                        </ButtonGroup>
                        </td>
                    </tr>))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default TabsComponent


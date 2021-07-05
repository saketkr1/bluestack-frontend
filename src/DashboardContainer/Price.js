import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

import Popup from './Popup';
import price from '../assets/Price.png';


function Price(props) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const showModal = () => {
        setOpen(true);
    }


    return (
        <Fragment>
            <span>
                <img className="mr-1" src={price}
                    style={{ width: "1.8em", height: "1.8em", float: "left", display: "inline" }} alt='price' />
                <Button variant="light" style={{ color: "#57698a", textDecoration: "none", fontSize: "0.95em" }}
                    onClick={showModal}>
                    {t('viewPricing')}
                </Button>
            </span>
            {open && <Popup isOpen={open} closeModal={() => setOpen(false)}>
                <img className="ml-5"
                    style={{ width: "6em", height: "6em", float: "left" }}
                    src={require('../assets/' + props.item.image_url)} alt="popupImage" />
                <div ><p className="mr-5 text-center">{props.item.name}<br />
                    <sub>{props.item.region}</sub> </p></div>               
                 <div className="text-center">
                 <h4>Pricing: </h4>
                    <h5>$ {(props.item.price)} - 1 Day</h5>
                    <h5>$ {(props.item.price) * 5} - 5 Days</h5>
                    <h5>$ {(props.item.price) * 30} - 1 months</h5>     
                </div>    
                 </Popup>}
        </Fragment>
    )
}

export default Price


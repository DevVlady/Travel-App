import React from 'react';
import './Card.scss';
import { BsThreeDots } from 'react-icons/bs';
import {GiCommercialAirplane} from 'react-icons/gi';
import {RiFileList3Fill} from 'react-icons/ri';
import {MdRestaurant, MdRateReview, MdLocalHotel} from 'react-icons/md';

const Card = () => {

    const styled = {
        float: 'right'
    }    

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">card title</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">card subtitle</h6> */}
                {/* <p className="card-text">paragraph text</p> */}
                {/* <a href="#" className="card-link">ICON</a> */}
                {/* <a href="#" className="card-link">another link</a> */}
            </div>
        </div>
    )
}

export default Card

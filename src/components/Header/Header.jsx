import React from 'react';
import './Header.scss';
import Card from '../Card/Card';
import { BsThreeDots } from 'react-icons/bs';
import {GiCommercialAirplane} from 'react-icons/gi';
import {RiFileList3Fill} from 'react-icons/ri';
import {MdRestaurant, MdRateReview, MdLocalHotel} from 'react-icons/md';

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/flights">
                    <Card />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/hotels">
                    <Card />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/todo">
                    <Card />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/restaurants">
                    <Card />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/reviews">
                    <Card />
                    </a>
                    </div>
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                    <a href="/more">
                    <Card />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

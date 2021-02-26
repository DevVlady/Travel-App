import React from 'react';
import './Header.scss';
import { BsThreeDots } from 'react-icons/bs';
import {GiCommercialAirplane} from 'react-icons/gi';
import {RiFileList3Fill} from 'react-icons/ri';
import {MdRestaurant, MdRateReview, MdLocalHotel} from 'react-icons/md';

const Header = () => {

    const styled = {
    }

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Flights <GiCommercialAirplane style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/hotels">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Hotels <MdLocalHotel style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/todo">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">To Do <RiFileList3Fill style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/restaurants">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Restaurants <MdRestaurant style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/reviews">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Reviews <MdRateReview style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-4 col-md-6 col-xs-12 card-container">
                        <a href="/more">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">More <BsThreeDots style={styled}/></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    )
}

export default Header

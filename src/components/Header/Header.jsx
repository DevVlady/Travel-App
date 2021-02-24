import React from 'react';
import './Header.scss';
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
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*  */}
                    <div className="col-lg-2 col-md-6 col-xs-6 card-container">
                        <a href="/flights">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">card title</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

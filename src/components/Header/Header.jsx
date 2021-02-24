import React from 'react';
import './Header.scss';
import Card from '../Card/Card';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                    <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

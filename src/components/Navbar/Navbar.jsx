import React from 'react';
import './Navbar.scss';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImBell } from 'react-icons/im';
import {GiCommercialAirplane} from 'react-icons/gi';

const Navbar = () => {

    return (
        <div>
            <nav>
                <div>
                    <a className='signinBtn' href="signin">Sign-In</a>
                    <a href="/trips"><BsFillHeartFill /> Trips</a>
                    <a href="/notifications"> <ImBell /> Notifications</a>
                    <h3>Travel App</h3>
                </div>
                <div className='navOptions'>
                    <a href="/flights">Flights <GiCommercialAirplane /></a>
                    <a href="/hotels">Hotels</a>
                    <a href="/ideas">Ideas</a>
                    <a href="/restaurants">Restaurants</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/more">More</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
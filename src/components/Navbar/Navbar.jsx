import React from 'react';
import './Navbar.scss';
import { BsFillHeartFill, BsThreeDots } from 'react-icons/bs';
import { ImBell } from 'react-icons/im';
// import {GiCommercialAirplane} from 'react-icons/gi';
// import {RiFileList3Fill} from 'react-icons/ri';
// import {MdRestaurant, MdRateReview, MdLocalHotel} from 'react-icons/md';

const Navbar = () => {

    const styled = {
        float: 'right'
    }

    return (
        <div>
            <nav>
                <div>
                    <a className='signinBtn' href="signin">Sign-In</a>
                    <a href="/trips"><BsFillHeartFill /> Trips</a>
                    <a href="/notifications"> <ImBell /> Notifications</a>
                    <h3>Travel App</h3>
                </div>
                {/* <div className='navOptions'>
                    <a href="/flights">Flights<GiCommercialAirplane style={styled}/></a>
                    <a href="/hotels">Hotels<MdLocalHotel style={styled}/></a>
                    <a href="/todo">To Do<RiFileList3Fill style={styled}/></a>
                    <a href="/restaurants">Restaurants<MdRestaurant style={styled}/></a>
                    <a href="/reviews">Reviews<MdRateReview style={styled}/></a>
                    <a href="/more">More<BsThreeDots style={styled}/></a>
                </div> */}
            </nav>
        </div>
    )
}

export default Navbar
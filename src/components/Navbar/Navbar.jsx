import React from 'react';
import './Navbar.scss';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImBell } from 'react-icons/im';

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
                    <a href="/flights">Flights</a>
                    <a href="/flights">Flights</a>
                    <a href="/flights">Flights</a>
                    <a href="/flights">Flights</a>
                    <a href="/flights">Flights</a>
                    <a href="/flights">Flights</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
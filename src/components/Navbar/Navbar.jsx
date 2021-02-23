import React from 'react';
import './Navbar.scss';
import {BsHeart} from 'react-icons/bs';
import {ImBell} from 'react-icons/im';

const Navbar = () => {

    return (
        <div>
            <nav>
                <a className='signinBtn' href="#">Sign-In</a>
                <a href="#"><BsHeart /> Trips</a>
                <a href="#"> <ImBell /> Notifications</a>
                <h3>Travel App</h3>
            </nav>
        </div>
    )
}

export default Navbar
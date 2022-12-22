import React from "react";

import { eventWrapper } from '@testing-library/user-event/dist/utils'
import './navbar.css'
import logo from '../../img/logo.png'

const Navbar = () => {
  return (
    <div className="n-wrapper">
    <div className="n-left">
        <div className="n-list">
        <img src={logo} alt="" />
            <ul style={{listStyleType:'none'}}>
                <li>PHOTO BOOKS</li>
                <li>CARDS</li>
                <li>CALENDARS</li>
                <li>HOME DECOR</li>
                <li>INSPIRATION</li>
                <li>DEALS</li>
                <input className="search" type="text" placeholder="search here" />
            </ul>
        </div>
    </div>
    <div className="n-right">
       
    <div className="n-list_right">
            <ul style={{listStyleType:'none'}}>
                <li><span color="#00ccff">SignUp</span></li>
                <li>LogIn</li>
                <li>help</li>
            </ul>
        </div>
        
    </div>
</div>
  )
}

export default Navbar
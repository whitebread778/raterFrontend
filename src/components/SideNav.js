import React from 'react';
import { Link } from "react-router-dom";
import bcit from '../../public/bcit.svg'

const SideNav = (props) => {
    return (
        <div className='sidenav'>
             <img src={bcit} className='logoImg' />
            <a href ="/"> Home</a>
            <a href ="/programs">Search</a>
 
            {/* <a href ="#section"> About</a>
            <a href ="#section"> {props.name}</a> */}
        </div>
    )
}


export default SideNav;
import React from 'react';
import './header.styles.scss';



const Header = (props) => (
    <div className='header'>
        <div className="navbar">
            <div className="logo">{props.logo}</div>
            <button className="userIcon"></button>
        </div>
    </div>
)

export default Header;
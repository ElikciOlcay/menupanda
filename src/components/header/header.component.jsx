import React from 'react';
import './header.styles.css';


const Header = (props) => (
    <div className='header'>
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">{props.logo}</a>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </nav>
    </div>
)

export default Header;
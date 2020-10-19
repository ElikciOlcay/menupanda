import React from 'react';
import './header.styles.scss';



const Header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/home" className="navbar-brand">Menupanda</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="/home" className="nav-link">Home</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="/home" className="nav-link">Speisen</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;
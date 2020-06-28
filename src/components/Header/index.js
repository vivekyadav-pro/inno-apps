import React from 'react';

import Logo from '../../assests/Logo/Logo';
import Info from './Info/index';
import Explore from './Explore/index';
import Authentication from './Authentication/index';

import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <div className="headerContent">
                <Info/>
                <div className="line">|</div>
                <Explore />
                <div className="line">|</div>
                <Authentication />
            </div>
        </div>
    )
}

export default Header;
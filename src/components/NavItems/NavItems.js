import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavItems.css'
import Items from './Item/Items'

const NavItems = () => (
    <ul className="NavItems">
        <Items>
            <NavLink to="/" exact>Home</NavLink>
        </Items>
        <Items>
            <NavLink to="/sessions">Sessions</NavLink>
            </Items>
        <Items>
            <NavLink to="/videos">Videos</NavLink>
        </Items>
        <Items>
            <NavLink to="/more">More</NavLink>
        </Items>
    </ul>
);

export default NavItems

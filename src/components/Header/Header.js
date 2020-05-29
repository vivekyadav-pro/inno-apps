import React from 'react'
import {Link} from 'react-router-dom'

import Banner from '../Banner/Banner'
import Hamburger from '../Hamburger/Hamburger'
import Notification from '../Notification/Notification'
import './Header.css'

const Header = (props) => {
    return (
        <Banner>
            <Hamburger />
            <h2>{props.name}</h2>
            <Link to="notifications"><Notification /></Link>
        </Banner>
    )
}

export default Header

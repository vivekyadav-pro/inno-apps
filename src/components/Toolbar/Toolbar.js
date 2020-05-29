import React, { Component } from 'react'
import './Toolbar.css';
import Hamburger from '../Hamburger/Hamburger';
import Notification from '../Notification/Notification';

class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                <Hamburger />
                <h3>Menu</h3>
                <Notification />
            </header>
        )
    }
}

export default Toolbar


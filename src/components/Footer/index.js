import React from 'react'

import { MdChatBubble } from "react-icons/md";
import Logo from '../../assests/Logo/Logo';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <Logo />
            <div className="privacy">
                <p>© 2018, A Perfect Space</p>
                <p>Cookies</p>
                <p>Terms and Privacy</p>
            </div>
            <div className="chatBox">
                <MdChatBubble
                    color="white"
                    size="30px" />
            </div>
        </div>
    )
}

export default Footer

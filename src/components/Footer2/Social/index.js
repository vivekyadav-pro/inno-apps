import React from 'react'
import { GrFacebookOption, GrLinkedinOption, GrPinterest, GrInstagram } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";

const Social = () => {
    return (
        <div className="social">
            <h3>Social</h3>
            <p><GrFacebookOption size="20px"
                color="rgb(168, 141, 141)" /></p>
            <p><GrInstagram size="20px"
                color="rgb(168, 141, 141)"  /></p>
            <p><GrLinkedinOption size="20px"
                color="rgb(168, 141, 141)"  /></p>
            <p><GrPinterest size="20px"
                color="rgb(168, 141, 141)"  /></p>
        </div>
    )
}

export default Social

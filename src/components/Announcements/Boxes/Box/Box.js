import React from 'react'
import './Box.css'

const Box = (props) => {
    return (
        <div className="box">
                <p>{props.title}</p>
                <div className="date">
                    <span>{props.date}</span>
                </div>
            </div>
    )
}

export default Box

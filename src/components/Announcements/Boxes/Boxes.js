import React from 'react'
import Banner from '../../Banner/Banner'
import Box from './Box/Box'
import './Boxes.css'

const Boxes = () => {
    return (
        <div>
            <Banner>
                <h3>All Announcements</h3>
            </Banner>
            <Box />
            <Box />
            <Box />
        </div>
    )
}

export default Boxes

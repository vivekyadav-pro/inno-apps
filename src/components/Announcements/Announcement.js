import React from 'react'
import Header from '../Header/Header'

const Announcement = () => {
    return (
        <div className="announncements">
            <Header>
                <h3>New Announcements</h3>
            </Header>
            
            <div className="box">
                <p>We will be closed on the coming Monday due to Govt orders</p>
                <div className="date">
                    <p>23-May-2020 5pm</p>
                </div>
            </div>
        </div>

    )
}

export default Announcement

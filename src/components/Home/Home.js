import React from 'react'

import Header from '../Header/Header'
// import Banner from '../Banner/Banner'
import Item from '../NavItems/Item/Items'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header name='Home' />
            <div className="main">
                <p>Class Chapter 15</p>
                <p>Start Time: 4 PM</p>
                <p>Duration: 60 Min</p>
                <span>*15 Mins to start the class</span>
            </div>
            <Item>
                <h3>Join</h3>
            </Item>
        </div>
        
    )
}

export default Home

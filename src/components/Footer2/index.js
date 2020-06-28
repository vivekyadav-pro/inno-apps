import React from 'react'

import Category from './Category/index'
import Company from './Company/index'
import Account from './Account/index'
import Social from './Social/index'

import './Footer2.css'

const Footer2 = () => {
    return (
        <div className="footer2">
            <Category />
            <Account />
            <Company />
            <Social />
        </div>
    )
}

export default Footer2

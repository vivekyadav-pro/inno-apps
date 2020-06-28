import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

import './SearchHeader.css'

const SearchHeader = () => {
    return (
        <div className="searchHeader">
            <div>
                <input type="text" placeholder="Search" />
                <AiOutlineSearch
                    size="20px"
                    color="grey" />
            </div>
        </div>
    )
}

export default SearchHeader

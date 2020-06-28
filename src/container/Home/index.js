import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Home.css'

import Header from '../../components/Header/index';
import SearchHeader from '../../components/SearchHeader/index'
import ImagePreview from '../../components/ImagePreview/index'
import Footer from '../../components/Footer/index';
import Footer2 from '../../components/Footer2/index';
import imagesData from '../../data/images.json'


const Home = (props) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const imgData = imagesData.data;
        
        setImages(imgData);
        console.log(images);
        
    }, [images]);

    if (images.image === '') {
        return null;
    }
    
    return (
        <div className="home">
            <Header/>
            <SearchHeader />
            <main>
                <ImagePreview images={images} />
                <Footer2 />
            </main>
            <Footer /> 
        </div>
    )
}

export default Home

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

    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        
        setImages(imagesData.data);

        axios.get('https://api.nasa.gov/planetary/apod?api_key=wD5GizpBycdy6hW8nJM8Hhsp5SW0dwJfeAS9N4vJ&count=100')
            .then(response => {
                console.log(response.data);
                setImageData(response.data);
            })
        console.log(imageData);
        
    }, []);

    if (images.image === '') {
        return null;
    }
    
    return (
        <div className="home">
            <Header/>
            <SearchHeader />
            <main>
                <ImagePreview images={imageData} />
                <Footer2 />
            </main>
            <Footer /> 
        </div>
    )
}

export default Home

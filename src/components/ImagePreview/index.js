import React, {useState} from 'react';
import { AiOutlineReload } from "react-icons/ai";

import ImageBox from './ImageBox/index'
import './ImagePreview.css'
import imagesData from '../../data/images.json'

const ImagePreview = (props) => {
    const [items, setItems] = useState(6)

    const reloadingHandler = () => {
        setItems(items + 6);
        console.log(items);
    }

    console.log(props.images.length);
    

    const imagePreview = props.images.slice(0, items)
                            .map((data, i) => (
                                <ImageBox
                                    images={data.image}
                                    caption={data.caption}
                                    artist={data.artist}
                                    key={i}
                                        />
                            ));
    
    const button = (items < props.images.length) ? <button onClick={reloadingHandler}>Load More...<AiOutlineReload /></button> : null;

    return (
        <div className="preview">
            <span>{props.images.length} Results</span>
            <div className="imagePreview">
                {imagePreview}
            </div>
            {button}
        </div>
    )
}

export default ImagePreview

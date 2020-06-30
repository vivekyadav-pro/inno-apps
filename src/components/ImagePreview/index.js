import React, {useState} from 'react';
import { AiOutlineReload } from "react-icons/ai";

import ImageBox from './ImageBox/index'
import './ImagePreview.css'

const ImagePreview = (props) => {
    const [items, setItems] = useState(15);

    const reloadingHandler = () => {
        setItems(items + 9);
        console.log(items);
    }

    console.log(props.images.length);
    

    const imagePreview = props.images.slice(0, items)
                            .map((data, i) => (
                                <ImageBox
                                    images={data.url}
                                    caption={data.explanation}
                                    artist={data.title}
                                    key={i}
                                        />
                            ));
    
    const button = (items < props.images.length) ? <button onClick={reloadingHandler}><AiOutlineReload />&nbsp;Load More...</button> : null;

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

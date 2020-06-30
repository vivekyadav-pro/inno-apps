import React, {useState} from 'react';
import { TiTick } from "react-icons/ti";

import './ImageBox.css';

const ImageBox = (props) => {

    const [selected, setSelected] = useState(false);

    const onSelectHandler = () => {
        selected ? setSelected(false) : setSelected(true);
    }

    const onSelect = selected ? 'select ticked' : 'select tick';

    return (
        <div className="imageBox">
            <img
                src={props.images} alt="photo" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className={onSelect} onClick={onSelectHandler}>
                    <TiTick
                        size="30px"
                        color="white"  />
            </div>
        </div>
    )
}

export default ImageBox

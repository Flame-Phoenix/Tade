import React, { useState } from 'react';
import './CustomPhotoAlbum.css';
import bar from '../../pictures/Modern-Kitchen.jpg';
import bar2 from '../../pictures/american-woodmark-custom-kitchen-cabinets-hdinstbl-64_1000.jpg';
import Arrow from './fast-forward.png';

const CustomPhotoAlbum = () => {

    const [state, setState] = useState([bar, bar2]);
    const [index, setIndex] = useState(0);

    const onClickNext = () => {
        if (index + 1 === state.length) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }
    const onClickPrevious = () => {
        if (index - 1 === -1) {
            setIndex(state.length - 1);
        } else {
            setIndex(index - 1);
        }
    }


    return (
            <div className="content">
                <img src={state[index]} style={{ "maxHeight": "90%", "maxWidth": "90%",marginTop:"2%" }} /> <br />
                <img src={Arrow} className="leftArrow" onClick={onClickNext} />
                <img src={Arrow} className="rightArrow" onClick={onClickPrevious} />
            </div>
    );


}


export default CustomPhotoAlbum;


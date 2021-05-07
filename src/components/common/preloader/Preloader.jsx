import React from 'react';
import preloader from '../../../preload.gif';

let Preloader = (props) => {
    return <div style={ {backgroundColor: 'whitesmoke' } }>
    <img src={preloader} />
    </div>    
}

export default Preloader;
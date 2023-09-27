import React from 'react';
import './loader.css'
const Loader = () => {
    return (
        <div className="lds">
            <div className="lds-heart"><div></div></div>
            <h1 className='lds__title'>Loading...</h1>
        </div>
    );
}

export default Loader;

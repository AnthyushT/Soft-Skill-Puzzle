import React from 'react';
import won_image from '../../../assets/images/won.gif'

const Won = () => {
    return (
        <div className='text-center m-5'>
            <h1 className=' text-success'>You Won!</h1>
            <img src={won_image} alt='image is not available' />

        </div>
    );
}

export default Won;

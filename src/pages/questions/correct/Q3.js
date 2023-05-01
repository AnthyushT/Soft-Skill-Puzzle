import React from 'react';
import q3_image from '../../../assets/images/q3.jpeg'
import { Link } from 'react-router-dom';

const Q3 = () => {
    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Q3: Identify the number of differences in the images given below.
                </p>
            </div>
            
            {/* Image goes here */}
            <div>
                <img src={q3_image} alt='image is not available' />
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/q4'>
                    <button className='btn btn-success'>5</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>6</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>4</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/wq1'>
                    <button className='btn btn-primary'>7</button>
                </Link>

                </p>
                <br/>



            </div>
        </div>
    );
}

export default Q3;
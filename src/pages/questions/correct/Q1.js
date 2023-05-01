import React, { useEffect } from 'react';
import q1_image from '../../../assets/images/q1.jpeg'
import { Link } from 'react-router-dom';

const Q1 = () => {

    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Q1: Let A be the number of triangles in the below figure.
                    Then choose the correct answer by solving the following equation
                    <b>(A / 5) + (4 * A) - (A - 10)</b>?
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src={q1_image} alt='image not available' />
            </div>
            <br/>
            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>20</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/q2'>
                    <button className='btn btn-warning'>74</button>
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/wq1'>
                    <button className='btn btn-danger'>75</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                <Link to='/wq1'>
                    <button className='btn btn-primary'>18</button>
                </Link>

                </p>
                
                <br/>
            </div>
        </div>
    );
}

export default Q1;
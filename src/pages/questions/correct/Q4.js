import React from 'react';
import { Link } from 'react-router-dom';

const Q4 = () => {
    return (
        <div className='text-center lead m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>Q4: 
                    The sum of the present ages of a father and his son is 60 years. 
                    Six years ago, father's age was five times the age of the son. 
                    After 6 years, son's age will be:
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>12</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>14</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>18</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/q5'>
                    <button className='btn btn-primary'>20</button>
                </Link>

                </p>
                <br/>




            </div>
        </div>
    );
}

export default Q4;
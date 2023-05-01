import React from 'react';
import { Link } from 'react-router-dom';

const WQ3 = () => {
    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Q3: Which cities of India got it's first official Apple store?
                </p>
            </div>

            {/* Image goes here */}
            <div>
                
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                



                <p>a)<Link to='/defeat'>
                    <button className='btn btn-success'>Delhi</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/defeat'>
                    <button className='btn btn-warning'>Hyderabad</button>
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/defeat'>
                    <button className='btn btn-danger'>Bangalore</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                <Link to='/exit'>
                    <button className='btn btn-primary'>Mumbai</button>
                </Link>

                </p>
                
                <br/>
            </div>
        </div>
    );
}

export default WQ3;

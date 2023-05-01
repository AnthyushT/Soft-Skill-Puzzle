import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WQ1 = () => {

    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Q1: Bobos coach has five players:
                    Four are named jojo, koko, lolo, and momo. What is the fifth players name?
                    Options
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                


                <p>a)<Link to='/defeat'>
                    <button className='btn btn-success'>Nono</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/defeat'>
                    <button className='btn btn-warning'>Soso</button>
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/defeat'>
                    <button className='btn btn-danger'>Hoho</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                <Link to='/wq2'>
                    <button className='btn btn-primary'>Bobo</button>
                </Link>

                </p>
                
                <br/>



            </div>
        </div>
    );
}

export default WQ1;

import React from 'react';
import wq2_image from '../../../assets/images/wq2.jpeg'
import { Link } from 'react-router-dom';

const WQ2 = () => {
    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Identify the king depicted in below image.
                    (Hint: Founder of Marata Empire)
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src={wq2_image} alt='image is not available' />
            </div>

            {/* Question goes here */}
            <div>
                <p className='lead m-3'>Q2: Who is the son above king in given options.</p>
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/defeat'>
                    <button className='btn btn-success'>Thanaji</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/wq3'>
                    <button className='btn btn-warning'>Sambhaji</button>
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/defeat'>
                    <button className='btn btn-danger'>Shivaji</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                <Link to='/defeat'>
                    <button className='btn btn-primary'>Maharana Pratap</button>
                </Link>

                </p>
                
                <br/>



            </div>
        </div>
    );
}

export default WQ2;

import React from 'react';
import { Link } from 'react-router-dom';

const Q2 = () => {
    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div className='m-4 lead'>
                <p>
                    <b>Watch the below video carefully</b> to answer the question.
                </p>
            </div>

            {/* Image goes here */}
            <div className='m-4'>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/07d2dXHYb94" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>

            {/* Question goes here */}
            <div>
                <p className='lead'>Q2: What is the color of the shirt the last person helped by dog was wearing?</p>
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>Orange</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>White</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>Brown</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/q3'>
                    <button className='btn btn-primary'>Yellow</button>
                </Link>

                </p>
                <br/>





            </div>
        </div>
    );
}

export default Q2;
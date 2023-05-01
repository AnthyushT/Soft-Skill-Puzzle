import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementTrial, resetSession } from '../redux/sessionSlice';
import { setTime } from '../redux/sessionSlice';
import { Link } from 'react-router-dom';

const Main = () => {

    const dispatch = useDispatch()

    const initDispatch = () => {
        dispatch(resetSession())
        dispatch(incrementTrial())
        const d = new Date()
        let time = d.getTime()
        let sessionData = { type: 0, startTime: time }
        dispatch(setTime(sessionData))
    }

    const buttonStyle = {
        margin: 'auto',
        display: 'block',
      };


    return (
        <div>

            <h1 style={{fontSize:"10vw"}} className='text-center text-success m-5'>-THE HUNT BEGINS-</h1>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Link to='/q1' onClick={()=>initDispatch()}>
            <button className='btn btn-warning' style={buttonStyle}>
                Let's Start
            </button>
            </Link>




        </div>
    );
}

export default Main;
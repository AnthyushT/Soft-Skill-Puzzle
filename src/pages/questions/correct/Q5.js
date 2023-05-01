import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, setDuration, resetSession } from '../../../redux/sessionSlice';
import { db } from '../../../firebase/Firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const Q5 = () => {

    const dispatch = useDispatch()
    const session = useSelector((state) => state.session)
    let endTime = 0
    let duration = 0

    const writeSessionToDB = async () => {
        const uid = session.uid
        const querySnapshot = await getDocs(collection(db, "users"))

        let dbData = {}
        let docId = {}

        querySnapshot.forEach((doc) => {
            if(doc.data().uid === uid){
                dbData = doc.data()
                docId = doc.id
            }
        });

        const docRef = doc(db, "users", docId);
        
        const data = {
            uid: uid,
            duration: duration + dbData.duration,
            trials: session.trialCount + dbData.trials,
        }
        await updateDoc(docRef, data);
        dispatch(resetSession())
    }

    const initEndTrial = async () => {
        // calculate end time
        const d = new Date()
        endTime = d.getTime()
        let sessionData = { type: 1, endTime: endTime }

        // calculate duration
        duration = (endTime - session.startTime) / (1000 * 60)
        let durationData = { duration: duration }

        dispatch(setTime(sessionData))
        dispatch(setDuration(durationData))

        await writeSessionToDB()
    }

    return (
        <div className='text-center m-5'>
            {/* Question goes here */}
            <div>
                <p className='lead'>
                    Q5: From the video cited in question-2, What is the name of the statue of dog?
                    Choose the answer as sum of the ASCII values of the letters of dog's name.
                    (Note: choose letters as lower case english alphabets)
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                


                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>295</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>299</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/won' onClick={() => initEndTrial()}>
                    <button className='btn btn-danger'>297</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/wq1'>
                    <button className='btn btn-primary'>296</button>
                </Link>

                </p>
                <br/>




            </div>
        </div>
    );
}

export default Q5;
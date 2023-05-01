import React, { useState } from 'react';
import { auth, db } from '../firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {addDoc, collection } from 'firebase/firestore'
import loading from '../assets/images/loading.gif'
import './SignUp.css'

const SignUp = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const registerWithEmailAndPassword = async () => {
        try {
            setIsLoading(true);
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                firstname: firstname,
                lastname: lastname,
                email: email,
                trials: 0,
                duration: 0,
            });
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            alert(err.message);
            setIsLoading(false);
            return 0;
        }
        return 1;
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (password === verifyPassword) {
            if(password.length >= 6){
                const status = await registerWithEmailAndPassword(e)
                if(status){
                    alert('Registration Successful')
                    window.location.replace('/')
                }
            }
        }
        else{
            alert("Password didn't match")
        }
    }

    return (
        <div class="container">
            <div class="title">Registration</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details">Firstname</span>
                            <input type="text" placeholder="Enter your firstname"
                             className="form-control"
                             id="firstname"
                             aria-describedby="firstnameHelp"
                             value={firstname}
                             onChange={(e) => setFirstname(e.target.value)}
                             required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Lastname</span>
                            <input type="text" placeholder="Enter your lastnamename" 
                            className="form-control"
                            id="lastname"
                            aria-describedby="lastnameHelp"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="text" placeholder="Enter your email" 
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        </div>
                        <div class="input-box">
                            <span class="details" for="password">Password</span>
                            <input type="text" placeholder="Enter your password" 
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        </div>
                        <div class="input-box">
                            <span class="details" for="verify-password">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password"
                            className="form-control"
                            id="verify-password"
                            value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)} 
                            required/>
                        </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" onClick={handleSignUp}/>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default SignUp;

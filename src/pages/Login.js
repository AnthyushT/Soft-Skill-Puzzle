import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loading from '../assets/images/loading.gif';
import { useDispatch } from 'react-redux';
import { setAdmin, setEmail, setUid } from '../redux/sessionSlice'
import './Login.css'

const Login = (params) => {

    const [email, setStateEmail] = useState('');
    const [password, setStatePassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            await dispatch(setEmail({email: res.user.email}))
            await dispatch(setUid({uid: res.user.uid}))
            return 1;
        } catch (err) {
            console.error(err);
            alert(err.message);
            return 0;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if(email !== '' && password.length >= 6){
            const status = await logInWithEmailAndPassword();
            if (status) {
                params.initDispatch()
                if(email==='admin@gmail.com'){
                    dispatch(setAdmin())
                }
            }
        }
        else{
            alert('enter all requied fields')
        }
    }

    return (
        <div class="wrapper">
        <div class="title">Login Form</div>
        <form action="#">
          <div class="field">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setStateEmail(e.target.value)}
              required
            />
            <label for="email">Email Address</label>
          </div>
          <div class="field">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setStatePassword(e.target.value)}
              required
            />
            <label for="password">Password</label>
          </div>
          <div class="content"></div>
          <div class="field">
            <input type="submit" onClick={handleLogin} value="Login" />
          </div>
          <div class="signup-link">
            Not a member? <a href="/signup">Signup now</a>
          </div>
        </form>
      </div>      
    );
}

export default Login;
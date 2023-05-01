import './App.css';
import Main from './pages/Main'
import { Routes, Route } from 'react-router-dom';
import Q1 from './pages/questions/correct/Q1';
import Q2 from './pages/questions/correct/Q2';
import Q3 from './pages/questions/correct/Q3';
import Q4 from './pages/questions/correct/Q4';
import Q5 from './pages/questions/correct/Q5';
import WQ1 from './pages/questions/wrong/WQ1';
import WQ2 from './pages/questions/wrong/WQ2';
import WQ3 from './pages/questions/wrong/WQ3';
import Won from './pages/questions/results/Won';
import Defeat from './pages/questions/results/Defeat';
import Exit from './pages/questions/results/Exit';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/Firebase';

function App() {

  const hasLoggedIn = useSelector((state) => state.auth.hasLoggedIn)
  const isAdmin = useSelector((state) => state.session.isAdmin)
  const dispatch = useDispatch()

  const initDispatch = () => {
    dispatch(login())
  }

  const handleLogout = () => {
    signOut(auth)
    dispatch(logout())
    window.location.href = '/'
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between bg-dark">
        <a className="navbar-brand text-danger ">SOFT SKILL PUZZLE APP</a>

        {
          hasLoggedIn
            ?
            <button className="btn btn-primary my-2 my-sm-0" onClick={handleLogout}>Logout</button>
            :
            <></>
        }
      </nav>

      {
        isAdmin
          ?
          <Admin />
          :
          <div>

            <Routes>
              {
                hasLoggedIn
                  ?
                  <Route path='/' element={<Main />} />
                  :
                  <>Login to start game</>
              }
              {
                hasLoggedIn
                  ?
                  <></>
                  :
                  <Route path='/' element={<Login initDispatch={initDispatch} />} />
              }
              {
                hasLoggedIn
                  ?
                  <></>
                  :
                  <Route path='signup' element={<SignUp />} />
              }
              <Route path='q1' element={<Q1 />} />
              <Route path='q2' element={<Q2 />} />
              <Route path='q3' element={<Q3 />} />
              <Route path='q4' element={<Q4 />} />
              <Route path='q5' element={<Q5 />} />
              <Route path='wq1' element={<WQ1 />} />
              <Route path='wq2' element={<WQ2 />} />
              <Route path='wq3' element={<WQ3 />} />
              <Route path='won' element={<Won />} />
              <Route path='defeat' element={<Defeat />} />
              <Route path='exit' element={<Exit />} />
            </Routes>
          </div>
      }
    </div>
  );
}

export default App;
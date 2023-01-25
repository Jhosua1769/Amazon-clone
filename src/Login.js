import React, { useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
//v6 useHistory is replaced by useNavigate
import { auth } from './firebase';

function Login() {

//how to add google authentication homework

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();
      
      auth.signInWithEmailAndPassword(email, password)
          .then(auth =>{

              navigate('/')
          })
          .catch(error => alert(error.message))


      //some fancy firebase
  }

  const register = e => {
    e.preventDefault();
      //some fancy register
    auth.createUserWithEmailAndPassword(email, password).then((auth)=> {
    
    // it successfully created a new user with email and password
    console.log(auth);
    if (auth) {

        navigate('/')
    }
  })
  .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to= '/'>
        <img className='login__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
        </Link>

        <div className='login__container'>
          <h1>Sign-in</h1>
          <form>
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

              <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
              <p>By signing-in you agree to Amazon's Conditions of Use & Sale, Please see our PrivacyNotica, our Cookies Notice and out interest-Based Ads</p>
              <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
          </form>
          </div>
    </div>
    
  )
}

export default Login
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Fire/firebase'
const Signup = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmpassword , setConfirmPassword] = useState('')
    const [error , setError] = useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
   
    if (user) {
        navigate('/')
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value)
    }
    const handleCreateUser =(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

          return (
                    <div className='signup'>
                <h2>Create account </h2>
                <div className='input-fileds '>

                    <form onSubmit={handleCreateUser}>
                        <label htmlFor="email">Your Email Address</label>
                        <input onBlur={handleEmail}  type="email" required />

                        <label htmlFor="email">Password</label>
                        <input onBlur={handlePassword}   type="password" required />

                        <label htmlFor="email">Re-type Your Password</label>
                        <input  onBlur={handleConfirmPassword} type="password" required />
                        <p id="pass">{error}</p>
                        <input className='submitbtn' type="submit" value="Continue" />
                    </form>

                    <div className='or'>
                        <p><small>I Have a Accout <Link to={'/login'}>Login</Link></small></p>
                    </div>
                    <div className='ordiv'>
                        <div className='line'></div>
                        OR
                        <div className='line'></div>
                    </div>
                    <div className="signinwith">
                        <img  src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" />
                        <img  src="https://img.icons8.com/ios-filled/2x/github.png" alt="" />
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                        <img src="https://img.icons8.com/glyph-neue/2x/mac-os.png" alt="" />
                    </div>
                </div>
            </div>
          );
};

export default Signup;
import { getAuth ,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth()
const Login = () => {
       const navigate = useNavigate()
       const [email , setEmail] = useState('')
       const [password , setPassword] = useState('')

       let location = useLocation();
       let from = location.state?.from?.pathname || "/";
       const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);
       if (user) {
              navigate(from , {replace : true})
       }
       const login =(e)=>{
              e.preventDefault()
              signInWithEmailAndPassword(email, password)
       }
          return (
                    <div className='signup'>
               <h2>Log In</h2>
           <div className='input-fileds'>
                 <form  onSubmit={login}>
                 <label htmlFor="email">Your email</label>
                  <input onBlur={(e)=>setEmail(e.target.value)}  type="email" required />

                  <label  htmlFor="password">Your Password</label>
                  <input onBlur={(e)=>setPassword(e.target.value) } type="password" required />

                  <input className='submitbtn' type="submit" value="Log in" />
                 </form>

                         </div>
                  
                  <div className='or'>
                                          <p><small>Create a Account Now <Link to={'/signup'}>Create Account</Link></small></p>
                            </div>
                            <div className='ordiv'>
                        <div className='line'></div>
                        OR
                        <div className='line'></div>
                    </div>
                            <div className="signinwith">
                                   <img src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" />
                                   <img src="https://img.icons8.com/ios-filled/2x/github.png" alt="" />
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                                   <img src="https://img.icons8.com/glyph-neue/2x/mac-os.png" alt="" />
                            </div>

                     
                  
         
       </div>
          );
};

export default Login;
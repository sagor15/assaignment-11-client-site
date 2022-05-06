import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';



const auth = getAuth(app);
const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


      if(loading || sending){
        return <Loading></Loading>
      }
    if(user){
        navigate(from, {replace: true});
        toast('login succesfull');
    }
    if(error){
      errorElement = <p className="text-danger">Error: {error?.message}</p>
  }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }



const resetPassword = async() => {
  const email = emailRef.current.value;
  if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
  }
  else{
    toast('Please enter your email address')
  }

}
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const provider = new GoogleAuthProvider();
   
    const handleGoogleSignin = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          if(user){
              navigate('/home');
          }
          console.log(user);
        }).catch((error) => {
        console.log(error.code);
        });
    }


    
    const handleSignUp = ()=>{
        navigate('/signup');
    }
    return (
        <div className='loginForm' >
             <div className='container'>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-2 mb-4 honeText'>Login</h1>
                <form onSubmit={handleSubmit} >
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input ref={emailRef} type="email" name="email" id="" required  />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input  ref={passwordRef} type="password" name="password" id="" required />
                    </div>
                    <p className='text-center'>{errorElement}</p>
                    <div className='loginBtnContainer'>
                        <button className="btn1">Login</button>
                    </div>

                </form>
                <div className='accountOrNot'>
                    <p>You have no account ? <button onClick={()=>handleSignUp()}>Sign Up</button></p>
                </div>
                <div className='accountOrNot'>
                    <p>Forget password ? <button onClick={resetPassword}>Reset</button></p>
                </div>
                <div className='OrSection'>
                    <p>Or</p>

                    <div onClick={()=>handleGoogleSignin()} className='google'>
                        <p><img  alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
        </div>
    );
};


export default Login;

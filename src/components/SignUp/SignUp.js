import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';






const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const SignUp = () => {

  



    // const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth);
    //   const [ updating ] = useUpdateProfile(auth);
    const navigate = useNavigate();

    

    if(loading ){
       return<Loading></Loading>
      }
    if(user){
        console.log('user', user);
        navigate('/home')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        // const name = event?.target?.name?.value;
        const email = event?.target?.email?.value;
        const password = event?.target?.password?.value;
        const confirmpassword = event?.target?.confirmpassword?.value;
        // const agree = event.target.terms.checked;
        console.log( password ,email)

        await createUserWithEmailAndPassword(email, password);
        console.log(email , password , confirmpassword);
        // await updateProfile({ displayName: name });
        // console.log('Updated profile');
        // navigate('/home');
    }






   
    const handleGoogleSignin = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        }).catch((error) => {
        console.log(error.code);
        });
    }

    

    const handleSignIn = ()=>{
        navigate('/login');
    }
    return (
        
            <div className='loginForm' >
             <div className='container'>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-2 mb-4 honeText'>Sign Up</h1>
                <form onSubmit={handleRegister} >
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input  type="email" name="email" id="" required  />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input  type="password" name="password" id="" required />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="confirmpassword">Confirm Password</label> <br />
                        <input o type="password" name="confirmpassword" id="" required />
                    </div>
                    <p className='text-center'></p>
                    <div className='loginBtnContainer'>
                        <button className="btn1">Sign Up</button>
                    </div>

                </form>
                <div className='accountOrNot'>
                    <p>You have  account ? <button onClick={()=> handleSignIn()} >Login</button></p>
                </div>
                <div className='accountOrNot'>
                    <p>Forget password ? <button>Reset</button></p>
                </div>
                <div className='OrSection'>
                    <p>Or</p>

                    <div onClick={()=>handleGoogleSignin()} className='google'>
                        <p><img  alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
    );
};

export default SignUp;




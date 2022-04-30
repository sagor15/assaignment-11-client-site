import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className='loginForm' >
             <div className='container'>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-2 mb-4'>Login</h1>
                <form >
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" required  />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input  type="password" name="password" id="" required />
                    </div>
                    <p className='text-center'></p>
                    <div className='loginBtnContainer'>
                        <button className="btn1">Login</button>
                    </div>

                </form>
                <div className='accountOrNot'>
                    <p>You have no account ? <button >Sign Up</button></p>
                </div>
                <div className='accountOrNot'>
                    <p>Forget password ? <button>Reset</button></p>
                </div>
                <div className='OrSection'>
                    <p>Or</p>

                    <div className='google'>
                        <p><img  alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Login;
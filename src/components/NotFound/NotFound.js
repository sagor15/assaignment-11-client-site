import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();
    const pageChange = ()=>{
        navigate('/home');
    }
    return (
        <div>
            <div class="wrapper">
                <div class="page">
                    <div class="header">
                        Oops!
                    </div>
                    <div class="tittle-page">
                        The page you're looking doesn't exist.
                    </div>
                    <div class="tittle-page2">
                        Don't panic just click the big button to return home!
                    </div>
                    <hr />
                        <button onClick={()=> pageChange()} class="btn4">Back to home</button>
                        <div class="footer">
                            <div class="content">
                                Quality, Experience,
                                <span>Excellence.</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import "./Fetures.css";

const Fetures = () => {
    return (
        <div className='container'>
            
            <h1 class="heading"> <span>Good for Health </span> </h1>
            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src="https://i.ibb.co/GVkFLsz/f-img-1.jpg" alt=""/>
                    </div>
                    {/* <div>
                        <img className='icon' src='https://i.ibb.co/T0MFCsb/icon-2.png' alt='' />
                    </div> */}
                    <div class="content">
                        <img src="https://i.ibb.co/Vw0tk0r/icon-1.png" alt=""/>
                    </div>
                </div>

                <div class="box second">
                    <div class="image">
                        <img src="https://i.ibb.co/y6ffT4h/f-img-2.jpg" alt="" />
                    </div>
                    <div class="content">
                        <img src="https://i.ibb.co/2tBn7Yh/icon-2.png" alt="" /> 
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://i.ibb.co/SmpqBFg/f-img-3.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <img src="https://i.ibb.co/sQqc64t/icon-3.png" alt="" /> 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fetures;
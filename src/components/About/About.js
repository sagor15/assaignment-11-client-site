import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div>
            <section className="about">

                <div className="image">
                    <img src='https://i.ibb.co/XDHkNXn/about-img.jpg' alt='' />
                </div>

                <div className="content">
                    <span>about us</span>
                    <h3 className="title">Every day is a chance to become better</h3>
                    <div className="box-container">
                        <div className="box">
                            <h3><i className="fas fa-check"></i>body and mind</h3>
                        </div>
                        <div className="box">
                            <h3><i className="fas fa-check"></i>healthy life</h3>
                        </div>
                        <div className="box">
                            <h3><i className="fas fa-check"></i>strategies</h3>
                        </div>
                        <div className="box">
                            <h3><i className="fas fa-check"></i>workout</h3>
                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    );
};

export default About;
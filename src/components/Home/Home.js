import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Fetures from '../Fetures/Fetures';
import "./Home.css";

const Home = () => {
    const [gymData, setGymData] = useState([]);
    useEffect(() => {
        fetch("gym.json")
            .then(res => res.json())
            .then(data => setGymData(data));
    }, []);
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center mt-5 text-danger hTwo'>All Products</h2>
            <div className='background'>
            <div className='container '>
            <div className='gym-firstContainer'>
            {
                gymData.slice(0, 6).map((item) =>
                    
                        <div className='gym-container'>
                            <img src={item.picture} alt='' />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <h4>Price: ${item.price}</h4>
                            <h4>Quantity: {item.quantity}Ps</h4>
                            <h5>Supplaier Name:{item.supplierName}</h5>
                            <button className='btn'>Stock Update</button>
                        </div>
                    )
            }
            </div>
            </div>
            </div>
            <About></About>
            <Fetures></Fetures>
        </div>
    );
};

export default Home;
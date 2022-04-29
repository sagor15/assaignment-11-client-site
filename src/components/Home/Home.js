import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
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
                        </div>
                    )
            }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;
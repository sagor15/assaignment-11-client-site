import React, { useEffect, useState } from 'react';
import "./InventoryItem.css"

const InventoryItem = () => {
    const [gymData , setGymData] = useState([]);
    useEffect(()=>{
        fetch("gym.json")
        .then(res => res.json())
        .then(data=> setGymData(data));
    }, [])
    return (
       
    <>
            {
                <div className='background1'>
                <div className='container '>
                <div className='gym-firstContainer'>
                {
                    gymData.map((item) =>
                        
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

             
            }
        </>
    );
};

export default InventoryItem;
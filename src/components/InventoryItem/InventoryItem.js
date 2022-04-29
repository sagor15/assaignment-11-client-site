import React, { useEffect, useState } from 'react';

const InventoryItem = () => {
    const [gymData , setGymData] = useState([]);
    useEffectt(()=>{
        fetch("gym.json")
        .then(res => res.json())
        .then(data=> console.log(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default InventoryItem;
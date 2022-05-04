import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./UpdateDetails.css";

const UpdateDetails = () => {
    const {updateId} = useParams();
    
    const [perIdDetails , setPerIdDetails] = useState({});
    useEffect(()=>{
        const url =`http://localhost:5000/service/${updateId}`;

        fetch(url)
        .then(res=> res.json()).then(data=> setPerIdDetails(data));


    }, [])
    return (
        <div>
            
            
            <img src={perIdDetails.picture} alt=""/>
            <h1>name : {perIdDetails.name}</h1>
            <h1>{perIdDetails.quantity}ps</h1>
            <h1>price :$ {perIdDetails.price}</h1>
        </div>
    );
};

export default UpdateDetails;
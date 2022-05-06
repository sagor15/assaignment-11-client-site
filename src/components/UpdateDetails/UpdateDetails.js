import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./UpdateDetails.css";

const UpdateDetails = () => {
    const { updateId } = useParams();
    const { register, handleSubmit } = useForm();
    // const [updateQuantity , setUpdateQuantity] = useState({});
    const [perIdDetails, setPerIdDetails] = useState({});
    const onSubmit = data => {
        console.log(data)
    };

    const handleDeliverdBtn = () =>{
        const newQuantity = parseInt(perIdDetails.quantity) -1;
        const makeQuantity = newQuantity;
        console.log(makeQuantity);
        fetch(`http://localhost:5000/service/${updateId}`,{
            method : "PUT",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify({makeQuantity}),
            
        })
        .then(res => res.json())
        .then(data => setPerIdDetails(data));
        
        console.log(perIdDetails);
    };
        

    
    useEffect(() => {
        const url = `http://localhost:5000/service/${updateId}`;

        fetch(url)
            .then(res => res.json()).then(data => setPerIdDetails(data));


    }, [perIdDetails,updateId]);

   


    return (
        <div>


            <img src={perIdDetails.picture} alt="" />
            <h1>name : {perIdDetails.name}</h1>
            <h1>old Quantity : {perIdDetails.quantity}ps</h1>
            {/* <h1>new Quantity : {perIdDetails.makeQuantity}ps</h1> */}
            <h1>price :$ {perIdDetails.price}</h1>
            <button onClick={()=>handleDeliverdBtn()} className='btn'>Deliverd</button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='update quantity' {...register("restock")} />
                <input value="Restock" type="submit" />
            </form>

        </div>
    );
};

export default UpdateDetails;
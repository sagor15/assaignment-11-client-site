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
        data.preventDeafult();
    };
    let newQuantity;
    const handleDeliverdBtn = () =>{
         newQuantity = parseInt(perIdDetails.quantity) -1;
        // const makeQuantity = newQuantity;
        // console.log(makeQuantity);
        const url = `https://protected-headland-35009.herokuapp.com/service/${updateId}`;
        fetch(url,{
            method : "PUT",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify({quantity:newQuantity}),
            
        })
        .then(res => res.json())
        .then(data => setPerIdDetails(data));
        
        console.log(perIdDetails);
    };
        

    
    useEffect(() => {
        const url = `https://protected-headland-35009.herokuapp.com/service/${updateId}`;

        fetch(url)
            .then(res => res.json()).then(data => setPerIdDetails(data));


    }, [perIdDetails,updateId,newQuantity]);

   


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
            <div>
            <button className='btn manage'>Manage inventories</button>

            </div>
        </div>
    );
};

export default UpdateDetails;
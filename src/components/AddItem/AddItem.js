import React from 'react';
import "./AddItem.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const AddItem = () => {



  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url =`https://protected-headland-35009.herokuapp.com/product`;
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result=>{
      console.log(result);
      toast("New Item Added Successful");
    })
  };

  return (
    <div className='w-50 mx-auto mb-5'>
      <h2 className='text-white text-center mb-5 mt-5'>Add Item</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-4' placeholder='Enter your Name'  {...register("name", { required: true, maxLength: 20 })} />
        <textarea className='mb-4' placeholder='Description'{...register("description")}/>
        <input className='mb-4' placeholder='Price'type="number" {...register("price")} />
        <input className='mb-4' placeholder='Quantity'type="number" {...register("quantity")} />
        <input className='mb-4' placeholder='Photo Url'type="text" {...register("picture")} />
        <input type="submit" value="Add Item" />
      </form>
      <ToastContainer />
    </div>

  );
};


export default AddItem;
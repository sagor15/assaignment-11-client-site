import React from 'react';
import "./AddItem.css";

const AddItem = () => {

   
   


        return (
            <div className="">
            <div className="container">
              <form className='form'>
                <div className="productName">
                  <label className="text-black">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className=""
                  />
                </div>
      
                <div className="productName">
                  <label className="text-black">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className=""
                  />
                </div>
                <div className="productName">
                  <label className="text-black">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className=""
                  />
                </div>
      
                <div className="productName">
                  <label
                    className="text-black"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="url"
                    className=""
                  />
                </div>
      
                <div className="addBtn">
                  <button className="">Add</button>
                </div>
              </form>
            </div>
          </div>
        );
    };


export default AddItem;
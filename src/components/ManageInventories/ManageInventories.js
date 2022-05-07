import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ManageInventories.css"

const ManageInventories = () => {

  const [gymData, setGymData] = useState([]);
  useEffect(() => {
    fetch("https://protected-headland-35009.herokuapp.com/service")
      .then(res => res.json())
      .then(data => setGymData(data));
  }, [])


  const navigate = useNavigate();
  const handleAddItem = () =>{
    navigate('/additem')
  }


  return (

    <>
      {
        <div >
          <div >
            
              {
                
                gymData.map((item) =>

                  <div className='text-black'>
                    <div className='manageitem'>
                      <img className='manageImg' src={item.picture} alt='' />
                      {/* <div> */}
                        <h3 >{item.name}</h3>
                      {/* </div> */}
                      {/* <div> */}
                        <h4>Price: ${item.price}</h4>
                      {/* </div> */}
                      {/* <div> */}
                        <h4>Quantity: {item.quantity}Ps</h4>
                      {/* </div> */}
                      <button onClick={handleAddItem} className='btn'>Add Item</button>
                      <button  className='btn'>Delete</button>
                    </div>

                    
                  </div>
                  
                )



              }
            </div>
           
          
        </div>


      }
    </>
  );
};

export default ManageInventories;
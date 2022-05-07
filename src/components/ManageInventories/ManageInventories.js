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


  const handlDelete = (id) =>{
    console.log(id);
    const proccedd = window.confirm('Are You Sure ? ');
    if(proccedd){
      const url = `https://protected-headland-35009.herokuapp.com/service/${id}`;
      fetch(url,{
        method:"DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    }
  }

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
                        <h3>{item._id}</h3>
                      {/* </div> */}
                      {/* <div> */}
                        <h4>Price: ${item.price}</h4>
                      {/* </div> */}
                      {/* <div> */}
                        <h4>Quantity: {item.quantity}Ps</h4>
                      {/* </div> */}
                      <button onClick={handleAddItem} className='btn'>Add Item</button>
                      <button onClick={()=>handlDelete(item._id)} className='btn'>Delete</button>
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
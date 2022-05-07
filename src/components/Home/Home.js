import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Fetures from '../Fetures/Fetures';
import InventoryItem from '../InventoryItem/InventoryItem';
import UpdateDetails from '../UpdateDetails/UpdateDetails';
import "./Home.css";

const Home = () => {
    const [gymData, setGymData] = useState([]);
    // const {_id} = gymData();
    // console.log(_id);
    useEffect(() => {
        fetch("https://protected-headland-35009.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setGymData(data));
    }, []);


    const navigate = useNavigate();
    const updateDetails = id => {
        navigate(`/inventoryitem/${id}`);
    }


    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center mt-5 text-danger hTwo'>All Products</h2>
            <div className='background'>
            <div className='container '>
            <div className='gym-firstContainer'>
            {
                gymData.slice(0, 6).map((item) =>       
                        <div>
                        <div className='gym-container'>
                            <img src={item.picture} alt='' />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <h4>Price: ${item.price}</h4>
                            <h4>Quantity: {item.quantity}Ps</h4>
                            <h5>Supplaier Name:{item.supplierName}</h5>
                            <button onClick={() => updateDetails(item._id)} className='btn'>Stock Update</button>
                        </div>
                        
                        </div>
                    )
            }
          
            </div>
            </div>
            </div>


            <div>
            <button className='btn manage'>Manage inventories</button>

            </div>
            <About></About>
            <Fetures></Fetures>
        </div>
    );
};

export default Home;
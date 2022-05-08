
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './components/Navber/Navber';

import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import UpdateDetails from './components/UpdateDetails/UpdateDetails';
import NotFound from './components/NotFound/NotFound';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddItem from './components/AddItem/AddItem';
import SignUp from './components/SignUp/SignUp';
import {getAuth} from "firebase/auth";
import app from './firebase.init';
// import RequireAuth from './RequireAuth/RequireAuth';

import Footer from './components/Footer/Footer';





const auth = getAuth(app);
function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventoryitem/:updateId' element={
          
        <UpdateDetails></UpdateDetails>
         
        }></Route>
        <Route path='/inventoryitem' element={<InventoryItem></InventoryItem>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>  
      
      <Footer></Footer>
    </div>
  );
}

export default App;

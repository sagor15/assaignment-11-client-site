
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './components/Navber/Navber';

import Home from './components/Home/Home';
import InventoryItem from './components/InventoryItem/InventoryItem';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventoryitem' element={<InventoryItem></InventoryItem>}></Route>
      </Routes>  
      
      {/* <InventoryItem></InventoryItem> */}
    </div>
  );
}

export default App;

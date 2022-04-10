
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'
import Lockpages from './components/Lockpages/Lockpages';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Lockpages><Orders></Orders></Lockpages>}></Route>
        <Route path='/inventory' element={<Lockpages><Inventory></Inventory></Lockpages>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

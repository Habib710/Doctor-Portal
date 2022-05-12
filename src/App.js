
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Nav/Home/Home'
import About from './Components/About/About'
import Navber from './Components/Nav/Navber';

function App() {
  return (
    <div className=''>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      

     
    </div>
  );
}

export default App;

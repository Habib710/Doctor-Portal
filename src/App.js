
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Nav/Home/Home'
import About from './Components/About/About'
import Navber from './Components/Nav/Navber';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Appointment/Appointment';

function App() {
  return (
    <div className='mx-auto '>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appoint' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      

     <Footer></Footer>
    </div>
  );
}

export default App;

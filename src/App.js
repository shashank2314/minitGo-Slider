import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider';
import Cart from  "./Components/Cart"
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Slider/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;

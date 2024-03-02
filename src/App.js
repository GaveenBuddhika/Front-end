
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeCategory from './Components/Pages/HomeCategory';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gin' element={<HomeCategory category="gin"/>}/>
        <Route path='/rum' element={<HomeCategory category="rum"/>}/>
        <Route path='/vodka' element={<HomeCategory category="vodka"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

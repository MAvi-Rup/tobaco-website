import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SocialSustain from './Components/Sustainability/SocialSustain';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/social-responsibility' element={<SocialSustain />}></Route>
      </Routes>
    </div>
  );
}

export default App;

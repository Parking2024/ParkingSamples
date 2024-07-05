//import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Booking from './Booking'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Booking" element={<Booking/>}></Route>
      </Routes>
</BrowserRouter>
    
  );
}

export default App;
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ourpeople from './Pages/Ourpeople';
import Home from './Pages/Home';
import Ourservice from './Pages/Ourservice';
import Login from './Pages/Login'; 
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/> 
<Route path="/contact" element={<Contact/>}/> 
<Route path="/about" element={<About/>}/> 
<Route path="/ourpeople" element={<Ourpeople/>}/> 
<Route path="/ourservice" element={<Ourservice/>}/> 
<Route path="/login" element={<Login/>}/> 
</Routes>
</BrowserRouter>
</>
  );
}

export default App;

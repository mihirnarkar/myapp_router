import './App.css';
import React from 'react';
import{
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"
import About from './components/About';
import Home from './components/Home'
// import ContactUs from './components/ContactUs';
import Contact from './components/Contact';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </HashRouter>
  )
}
export default App;

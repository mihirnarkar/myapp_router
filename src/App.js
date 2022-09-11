import './App.css';
import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import About from './components/About';
import Home from './components/Home'
// import ContactUs from './components/ContactUs';
import Contact from './components/Contact';


function App() {
  return (
    <Router basename="/myapp_router">
      <Routes>
        <Route path='/myapp_router' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}
export default App;

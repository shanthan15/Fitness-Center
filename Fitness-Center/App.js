import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Workouts from './components/Workouts';
import Register from './components/Register';
import Plans2 from './components/Plans2';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


function App() {

return (
  
    <div className="App">
    <Main>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='Workouts' element={<Workouts />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Contact' element={<Contact />} />
        <Route exact path='Register' element={<Register />} />
        <Route exact path='Plans' element={<Plans2 />} />
        
      </Routes>
      <Footer />
    
      </Main>
    </div>
  
);

}

export default App;
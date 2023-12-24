import React, { useState } from 'react';
import Navbar from './components/common/navbar/Navbar';
import Home from './components/screens/home/Home';
import './App.css';
import Slider from './components/screens/home/Slider';
import SlidingCard from './components/common/Cards';
import FooterCard from './components/common/Footer';
import { InputForm } from './components/common/InputForm';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  return (
    <div className='custom-pg sm:text-left bg-gradient-to-b from-blue-200  bg-cover...' >            <Navbar/>
      <Home open={open} handleOpen={handleOpen}/>
      <Slider/>
      <SlidingCard/>
      <InputForm open={open} handleOpen={handleOpen}/>
      <FooterCard/>
    </div>
  );
};

export default App;

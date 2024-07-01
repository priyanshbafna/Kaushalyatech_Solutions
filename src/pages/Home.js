import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>
    <Navbar/>
      
      <div className="home">
        <div className="hero">
          <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" alt="Hero Background" />
          <h1>Welcome to Kaushalyatech Solutions</h1>
          <p className='para'>We provide one-stop solutions for web development and digital marketing</p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;
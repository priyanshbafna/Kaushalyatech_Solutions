import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Achievement from './pages/Achievement';
import Chatbot from './pages/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap';


{<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>}
{<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>}

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
      {/* <Navbar/> */}
    <Chatbot/> 
      
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="achievement">
        <Achievement/>
      </section>
      <section id="">
        <Chatbot/>
      </section>

      <Footer/>
     
    </div>
  );
}

export default App;


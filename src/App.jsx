// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import FAQ from './FAQ';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div style={{ width: '200px', backgroundColor: 'cornflowerblue', minHeight: '100vh' }}> 
          <Navbar />
        </div>
        <div style={{ flex: 1, minHeight: '100vh', paddingLeft:'50px' }}> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

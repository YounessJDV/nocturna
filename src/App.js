import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar'
import Header from './components/header'
import Features from './components/features'
import Section_one from './components/section_one'
import Offres from './components/offres'
import Footer from './components/footer'
import Faq from './components/faq'
import Realisations from "./components/realisations"
import Cta from './components/cta'

import Contact from './components/contact';

function App() {

  useEffect(() => {
    AOS.init(); 
   }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> 
                <Header />
                <Features />
                <Section_one/>
                <Offres/>
                <Faq/>
                <Cta/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>




  );
}

export default App;

import React from 'react';
import '../App.css';
import Header from "./header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about/About";
import { Route, Routes} from 'react-router-dom';
import Contact from "./contact/Contact";
import Project from "./project/Project";
import Career from "./career/Career";
import Footer from "./footer/Footer";


function App() {
  return (
      <div className="App">
          <Header/>
      <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/career" element={<Career />}/>
      </Routes>
          <Footer/>
    </div>
  );
}

export default App;

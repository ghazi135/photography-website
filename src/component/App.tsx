import React from 'react';
import '../App.css';
import Header from "./header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about/About";
import { Route, Routes} from 'react-router-dom';
import Contact from "./contact/Contact";
import { Fade } from '@mui/material';
import Project from "./project/Project";
import Skill from "./skill/Skill";


function App() {
  return (
      <Fade in timeout={{ enter: 1200 }}>
      <div className="App">
          <Header/>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/skill" element={<Skill />}/>
      </Routes>
    </div>
      </Fade>
  );
}

export default App;

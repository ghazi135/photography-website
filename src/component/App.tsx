import React from 'react';
import '../App.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./About";
import { Route, Routes} from 'react-router-dom';
import Contact from "./Contact";
import { Fade } from '@mui/material';
import Project from "./Project";
import Skill from "./Skill";


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

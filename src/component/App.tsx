import React from 'react';
import '../App.css';
import Header from "./header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Footer from "./footer/Footer";
import Error from "./error/Error";
import Portrait from "./portrait/Portrait";
import Landscape from "./landscape/Landscape";
import LongExposer from "./long-exposer/LongExposer";
import About from "./about/About";
import Street from "./street/Street";


function App() {
    return (
        <div className="App">
                <Header/>
                <Routes >
                    <Route path={"/"} element={<About />}/>
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/landscape"} element={<Landscape />}/>
                    <Route path={"/long-exposer"} element={<LongExposer />}/>
                    <Route path={"/portrait"} element={<Portrait />}/>
                    <Route path={"/street"} element={<Street />}/>

                    <Route path={"*"} element={<Error />}/>
                </Routes>

            <Footer/>
        </div>
    );
}

export default App;

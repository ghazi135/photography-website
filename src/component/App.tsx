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


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes >

                <Route path={process.env.PUBLIC_URL + "/landscape"} element={<Landscape />}/>
                <Route path={process.env.PUBLIC_URL + "/long-exposer"} element={<LongExposer />}/>

                <Route path={process.env.PUBLIC_URL + "/portrait"} element={<Portrait />}/>
                <Route path={process.env.PUBLIC_URL + "*"} element={<Error />}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

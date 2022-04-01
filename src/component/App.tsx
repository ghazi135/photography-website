import React, {lazy, Suspense} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import {Box, LinearProgress} from "@mui/material";


const About = lazy(() => import('./about/About'));
const Landscape = lazy(() => import('./landscape/Landscape'));
const Header = lazy(() => import('./header/Header'));
const Footer = lazy(() => import('./footer/Footer'));
const LongExposer = lazy(() => import('./long-exposer/LongExposer'));
const Portrait = lazy(() => import('./portrait/Portrait'));
const Street = lazy(() => import('./street/Street'));
const Error = lazy(() => import('./error/Error'));

const renderLoader = () =>  ( <Box sx={{  width: '100%' }}>
    <LinearProgress color="inherit" />
</Box>);
function App() {
    return (
        <Suspense fallback={renderLoader()}>
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
        </Suspense>
    );
}

export default App;


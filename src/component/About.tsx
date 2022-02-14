import React from 'react';
import '../About.css';
import Fade from '@mui/material/Fade';
import picture from "../profile-picture.jpg"


function About() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="About">

                <div className="centering">
                        <img src={picture} alt="ghazi"/>
                </div>
            </div>
        </Fade>);
}

export default About;

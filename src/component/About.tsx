import React from 'react';
import '../About.css';
import Fade from '@mui/material/Fade';


function About() {
    return (
        <Fade in timeout={{ enter: 1200 }}>
            <div className="About">
                <p>about</p>
            </div>
        </Fade>

    );
}

export default About;

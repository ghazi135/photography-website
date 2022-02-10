import React from 'react';
import './Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade} from "@mui/material";

function Skill() {
    return (
        <Fade in timeout={{ enter: 1200 }}>

            <div className="Skill">
                <p>SKILLS</p>
            </div>
        </Fade>
    );
}

export default Skill;

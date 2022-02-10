import React from 'react';
import './Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade} from "@mui/material";

function Project() {
    return (
        <Fade in timeout={{ enter: 1200 }}>
            <div className="Project">
                <p>Project</p>
            </div>
        </Fade>
    );
}

export default Project;

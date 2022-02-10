import React from 'react';
import '../Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade} from "@mui/material";

function Contact() {
    return (
        <Fade in timeout={{ enter: 1200 }}>

        <div className="Contact">
            <p>Contact</p>
        </div>
        </Fade>
    );
}

export default Contact;

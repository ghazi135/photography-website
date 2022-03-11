import React from 'react';
import './Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade} from "@mui/material";

function Contact() {
    return (
        <Fade in timeout={{enter: 1200}}>

            <div className="Contact">
                <div className="centering-contact">
                    <h3>
                        Got an interesting project you're working on, or just want to say hi ?
                    </h3>
                    <div> I'd love to hear from you!</div>
                    <div>The best way to reach me is to shoot me an email
                        <a className="email" href="mailto:gbouzazi@gmail.com">&nbsp;gbouzazi@gmail.com</a>.
                    </div>
                    You can also connect with me on <a className="email"
                                                       href="https://www.linkedin.com/in/ghazi-bouzazi/">&nbsp;LinkedIn</a> or
                    DM.
                </div>

            </div>

        </Fade>
    );
}

export default Contact;

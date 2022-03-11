import React from 'react';
import './Footer.css';
import Instagram from '../../assets/social-media/instagram.png';
import LinkedIn from '../../assets/social-media/linkedin.png';
import Github from '../../assets/social-media/Octocat.png'
import {Fade, Hidden} from "@mui/material";

function Footer() {

    return (
        <Fade in timeout={{enter: 1200}}>


            <div className="Footer">

                <Hidden mdDown>
                    <footer className="footer">
                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://www.instagram.com/photos_of_ghazi/">
                            <img className="logo-footer" src={Instagram}/>
                        </a>

                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://www.linkedin.com/in/ghazi-bouzazi/">
                            <img className="logo-footer" src={LinkedIn}/>
                        </a>

                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://github.com/ghazi135">
                            <img className="logo-footer" src={Github}/>
                        </a>
                        <span>
                    &#169; ghazi bouzazi 2022 • all rights reserved
                </span>
                    </footer>
                </Hidden>

                <Hidden mdUp>
                    <footer className="footer-mobile">
                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://www.instagram.com/photos_of_ghazi/">
                            <img className="logo-footer" src={Instagram}/>
                        </a>

                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://www.linkedin.com/in/ghazi-bouzazi/">
                            <img className="logo-footer" src={LinkedIn}/>
                        </a>

                        <a target="_blank"
                           rel="noreferrer noopener"
                           href="https://github.com/ghazi135">
                            <img className="logo-footer" src={Github}/>
                        </a>
                        <span>
                    &#169; ghazi bouzazi 2022 • all rights reserved
                </span>
                    </footer>
                </Hidden>

            </div>
        </Fade>
    );
}


export default Footer;
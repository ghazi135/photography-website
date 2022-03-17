import React from 'react';
import './About.css';
import Fade from '@mui/material/Fade';
import picture from "../../assets/profile-picture-photography.jpg"
import {Col, Container, Row} from "react-bootstrap";
import {Hidden} from "@mui/material";


function About() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="About">

                <Hidden mdDown>
                    <Container className="containers-center">

                        <Row>

                            <Col md={{span: 2, offset: 3}}> <img className="img-about" src={picture} alt="ghazi"/></Col>
                            <Col md={{span: 5, offset: 2}}>
                                <p>Hi <span className="wave" role="img" aria-label="wave">👋🏼</span> I'm Ghazi, a Full
                                    Stack web developer and a Photographer. Welcome in my photography universe </p>
                                <p>I'm from Tunisia and i moved to France when i was 17 years old.
                                    during my free time i'm going to do some photo sessions with some models or traveling and shoot the best landscapes or beautiful places in a lot of cities  </p>

                                <p>Sometimes I blog (read: complain/meme) about coding and design and doing some shooting with models or landscapes.
                                    go follow me on my instagram page and enjoy watching my best photos or watching my best moments that share on my story
                                </p>
                            </Col>
                        </Row>


                    </Container>

                </Hidden>
                <Hidden mdUp>
                    <Container className="containers-center">

                        <Row>

                            <Col md={{span: 2, offset: 3}}> <img className="img-about-mobile" src={picture} alt="ghazi"/></Col>
                            <Col md={{span: 5, offset: 2}}>
                                <p>Hi <span className="wave" role="img" aria-label="wave">👋🏼</span> I'm Ghazi, a Full
                                    Stack web developer and a Photographer. Welcome in my photography universe </p>
                                <p>I'm from Tunisia and i moved to France when i was 17 years old.
                                    during my free time i'm going to do some photo sessions with some models or traveling and shoot the best landscapes or beautiful places in a lot of cities  </p>

                                <p>Sometimes I blog (read: complain/meme) about coding and design and doing some shooting with models or landscapes.
                                    go follow me on my instagram page and enjoy watching my best photos or watching my best moments that share on my story
                                  </p>
                            </Col>
                        </Row>


                    </Container>

                </Hidden>



            </div>

        </Fade>);
}

export default About;

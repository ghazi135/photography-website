import React from 'react';
import '../About.css';
import Fade from '@mui/material/Fade';
import picture from "../profile-picture.jpg"
import {Col, Container, Row} from "react-bootstrap";



function About() {
    // @ts-ignore
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="About">


                    <Container className="containers-center">

                        <Row>

                            <Col md={{ span: 2, offset:3 }}>  <img src={picture} alt="ghazi"/></Col>
                            <Col md={{ span: 5, offset:2}}>
                               <p>Hi 👋🏼 I'm Ghazi, a Full Stack web developer. I'm interested in anything tech — especially web dev and UI/UX. I love building delightful and clean experiences.</p>

                                <p>Currently I work as a Full Stack engineer for Hardis Group Come build greet experience for our clients with us. We're hiring!</p>

                                <p>I'm from Tunisia and i moved to France when i was 17 years old. If I'm not beep booping, you can find me playing frisbee, visiting friendos, Yelping restaurants to try, or speaking to your manager.</p>

                               <p>Sometimes I blog (read: complain/meme) about coding and design and doing some shooting with models and landscape. Check out some of my past projects on my Github space and feel free to connect!</p>
                            </Col>
                        </Row>


                    </Container>

                </div>

        </Fade>);
}

export default About;

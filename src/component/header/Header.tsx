import React from 'react';
import './Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Fade} from "@mui/material";

function Header() {
    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Header">

                <Navbar bg="none" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/"><span>GHAZI BOUZAZI</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >

                            </Nav>
                            <Nav>


                                <LinkContainer to={process.env.PUBLIC_URL + "/portrait"}>
                                    <Nav.Link>Portrait</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/landscape"}>
                                    <Nav.Link>Landscapes</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/long-exposer"}>
                                 <Nav.Link> Long Exposer</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={process.env.PUBLIC_URL + "/about"}>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                                      <Nav.Link href="https://ghazibouzazi.com/">Software Development</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    );
}

export default Header;

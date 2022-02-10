import React from 'react';
import '../Header.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import {Fade} from "@mui/material";

function Header() {
    return (
        <Fade in timeout={{ enter: 1200 }}>
        <div className="Header">

            <Navbar bg="none"  variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><span>GHAZI BOUZAZI</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >



                        </Nav>
                        <Nav>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/project">
                                <Nav.Link>Project</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/skill">
                                <Nav.Link>Skills</Nav.Link>
                            </LinkContainer>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </Fade>
    );
}

export default Header;

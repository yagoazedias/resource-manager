import React from 'react';
import { Layout } from 'atoms';
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyNavbar = () => (
    <Navbar>
        <Container>
        <Nav className="me-auto">
            <Navbar.Brand>Aplicações corporativas</Navbar.Brand>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/">Home</Link></Navbar.Text></Layout>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/recurso">Recursos</Link></Navbar.Text></Layout>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/curso">Cursos</Link></Navbar.Text></Layout>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/evento">Eventos</Link></Navbar.Text></Layout>
        </Nav>
        </Container>
    </Navbar>
)

export default MyNavbar;

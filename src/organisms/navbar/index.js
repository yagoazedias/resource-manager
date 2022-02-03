import React from 'react';
import { Layout } from 'atoms';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
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
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/criar/recurso">Recursos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/criar/curso">Cursos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/criar/evento">Eventos</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MyNavbar;

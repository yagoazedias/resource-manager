import React from 'react';
import { Layout } from 'atoms';
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyNavbar = () => (
    <Navbar>
        <Container>
        <Nav className="me-auto">
            <Navbar.Brand href="#home">Aplicações corporativas</Navbar.Brand>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/resource">Recursos</Link></Navbar.Text></Layout>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/courses">Cursos</Link></Navbar.Text></Layout>
            <Layout mt='9px' mr='25px'><Navbar.Text><Link to="/collections">Coleções</Link></Navbar.Text></Layout>
        </Nav>
        </Container>
    </Navbar>
)

export default MyNavbar;

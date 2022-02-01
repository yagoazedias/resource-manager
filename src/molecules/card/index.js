import React from "react";
import { Layout } from "atoms";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Card = ({ title, image, description, link, onClick }) => (
    <Layout className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <Layout className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Layout display="flex">
                <Link to={link} className="btn btn-primary">Ver esse recurso</Link>
                <Layout ml="20px">
                    <Button onClick={onClick} variant="danger">Deletar</Button>
                </Layout>
            </Layout>
        </Layout>
    </Layout>
)

export default Card
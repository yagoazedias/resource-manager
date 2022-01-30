import React from "react";
import { Layout } from "../../atoms";
import { Link } from "react-router-dom";

const Card = ({ title, image, description, link }) => (
    <Layout className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <Layout className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={link} className="btn btn-primary">Ver esse recurso</Link>
        </Layout>
    </Layout>
)

export default Card
import React from "react";
import { Layout } from "../../atoms";

const Card = ({ title, image, description, link }) => (
    <Layout className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <Layout className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary">Ver esse recurso</a>
        </Layout>
    </Layout>
)

export default Card
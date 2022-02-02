import React from 'react';
import { Layout, Subtitle } from 'atoms';

const Resource = ({ resource }) => (
    <Layout>
        <Subtitle>Listagem de recursos</Subtitle>
        <p>Titulo: {resource.titulo}</p>
    </Layout>
)

export default Resource;
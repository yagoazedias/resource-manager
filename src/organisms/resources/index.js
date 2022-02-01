import React from 'react';
import { Layout, Flex, Subtitle } from 'atoms';
import { Card } from 'molecules';

const Resource = ({ id, resource, deleteResource }) => (
    <Layout mr="10px" mt="10px" maxWidth="400px">
        <Card onClick={() => { deleteResource(id) }} title={resource.titulo} description={resource.descricao} image={resource.imagem} link={`/recurso/${resource.id}`} />
    </Layout>
)

const Resources = ({ resources, deleteResource }) => (
    <Layout>
        <Subtitle>Listagem de recursos</Subtitle>
        <Flex flexDirection="row" flexWrap='wrap' alignItems='start'>
        {resources.length > 0 
            ? resources.map(resource => (
            <Resource id={resource.id} resource={resource} deleteResource={deleteResource} />
            ))  
            : "carregando"}
        </Flex>
    </Layout>
)

export default Resources;
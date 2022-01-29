import React from 'react';
import { Layout, Flex } from 'atoms';
import { Card } from 'molecules';

const Resource = ({ resource }) => (
    <Layout m="10px" maxWidth="400px">
        <Card title={resource.titulo} description={resource.descricao} image={resource.imagem} />
    </Layout>
)

const Resources = ({ resources }) => (
    <Flex flexDirection="row" flexWrap='wrap' alignItems='start'>
    {resources.length > 0 
        ? resources.map(resource => (
        <Resource resource={resource} />
        )) 
        : "carregando"}
    </Flex>
)

export default Resources;
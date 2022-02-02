import React from 'react';
import { Layout, Flex, Subtitle } from 'atoms';
import { Card } from 'molecules';
import API from 'api';

const deleteResource = async (id) => {
    try {
        const response = await API.deleteResource(id);
        if (response.status == 200) {
            alert("Recurso foi deletado com sucesso");
            window.location.reload();
        } else {
            console.log(response)
            throw new Error("SQL error")
        }
    } catch (e) {
        alert(`Não foi possível deletar o recurso pois esse está relacionado a um autor existente`);
    }
}

const Resource = ({ id, resource }) => (
    <Layout mr="10px" mt="10px" maxWidth="400px">
        <Card onClick={() => { deleteResource(id) }} title={resource.titulo} description={resource.descricao} image={resource.imagem} link={`/recurso/${resource.id}`} />
    </Layout>
)

const Resources = ({ resources }) => (
    <Layout>
        <Subtitle>Listagem de recursos</Subtitle>
        <Flex flexDirection="row" flexWrap='wrap' alignItems='start'>
        {resources.length > 0 
            ? resources.map(resource => (
            <Resource id={resource.id} resource={resource} />
            ))  
            : "carregando"}
        </Flex>
    </Layout>
)

export default Resources;
import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';

import API from 'api';
import Utils from 'utils';

const ResourceCreation = () => {  

    const [resource, setResource] = useState({ palavras_chaves: []})
    const [colecoes, setColecoes] = useState([])
    const [colecaoId, setColecao] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await API.getAllCollections()
            setColecoes(response)
          }
          fetchData();
    }, [])

    const handleDelete = i => {
        setResource({
            ...resource,
            palavras_chaves: resource.palavras_chaves.filter((_, index) => index !== i)
        })
      };
    
    const handleAddition = tag => {
        setResource({
            ...resource,
            palavras_chaves: [...resource.palavras_chaves, tag]
        })
    };

    const createResource = async (resource, colecaoId) => {
        const response = await API.createResource({
            ...resource,
            palavras_chaves: resource.palavras_chaves.map(i => i.text),
        }, colecaoId);
        if (response.status == 200) {
            alert("Recurso atualizado com sucesso");
            window.location.reload();
        } else {
            throw new Error("SQL error")
        }
    }

    return (
        <Center width="1500px">
            <Navbar/>
            <Layout>
                <Form>
                    <Layout mt="40px">
                        <h5>Criação de um recurso</h5>
                    </Layout>
                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(resource, "titulo", e.target.value, setResource)} 
                            value={resource.titulo} 
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descricao</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(resource, "descricao", e.target.value, setResource)} 
                            value={resource.descricao} 
                            as="textarea" 
                            rows={3} 
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Link</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(resource, "link", e.target.value, setResource)} 
                            value={resource.link} 
                            rows={3} 
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Imagem (link)</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(resource, "imagem", e.target.value, setResource)} 
                            value={resource.imagem} 
                            rows={3}
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de criação</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(resource, "data_de_criacao", e.target.value, setResource)} 
                            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(resource, "data_de_criacao"))}
                            disabled={false} 
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                            rows={3} 
                            type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de registro</Form.Label>
                        <Form.Control 
                            onChange={e => { Utils.updateResourceByKey(resource, "data_de_registro", e.target.value, setResource)}}
                            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(resource, "data_de_registro"))}
                            disabled={false} 
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            rows={3} 
                            type="date"  />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Layout mb="10px">
                            <Form.Label>Palavras chaves</Form.Label>
                        </Layout>
                        <ReactTags
                            tags={resource.palavras_chaves}
                            className={".tags form-control"}
                            inputFieldPosition="bottom"
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Coleção</Form.Label>
                        <Form.Select onChange={e => setColecao(e.target.value)} aria-label="Selecione aqui a coleção que o recurso pertence">
                            <option value={0}>Selecione aqui a coleção que o recurso pertence</option>
                            {colecoes.map(colecao => (
                                <option value={colecao.id}>{`id: ${colecao.id} => Titulo: ${colecao.titulo}`}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button onClick={(e) => {e.preventDefault(); createResource(resource, colecaoId)} } disabled={false} variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form.Group>

                </Form>
            </Layout>
        </Center>
    )
}

export default ResourceCreation
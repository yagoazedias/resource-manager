import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import API from 'api';
import Utils from 'utils';

const Resource = () => {

  const params = useParams();
  const [editable, setEditable] = useState(false)
  const [resource, setResource] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await API.getResourceById(params.id)
      setResource(response)
    }
    fetchData();
  }, [])

  const updateResource = async (resource, id) => {
    const response = await API.updateResource(resource, id);
    if (response.status == 200) {
        alert("Recurso foi atualizado com sucesso");
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
            <h5>Informações do recurso</h5>
          </Layout>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "titulo", e.target.value, setResource)}} 
                value={Utils.getAttributeBykey(resource, "titulo")} disabled={!editable} type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descricao</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "description", e.target.value, setResource)}} 
                value={Utils.getAttributeBykey(resource, "descricao")} as="textarea" rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "link", e.target.value, setResource)}} 
                value={Utils.getAttributeBykey(resource, "link")} rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagem (link)</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "imagem", e.target.value, setResource)}} 
                value={Utils.getAttributeBykey(resource, "imagem")} rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de criação</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "data_de_criacao", e.target.value, setResource)}} value={Utils.getDateInputFromIso(Utils.getAttributeBykey(resource, "data_de_criacao"))} disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" rows={3} type="date"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de registro</Form.Label>
            <Form.Control onChange={e => { 
                Utils.updateResourceByKey(resource, "data_de_registro", e.target.value, setResource)}} value={Utils.getDateInputFromIso(Utils.getAttributeBykey(resource, "data_de_registro"))} disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" rows={3} type="date"  />
          </Form.Group>

          <Form.Check 
            type="checkbox"
            label="Marque aqui para editar o recurso"
            onChange={(e) => setEditable(e.target.checked)}
          />

          <Layout mt="40px">
            <h5>Informações adicionais</h5>
          </Layout>

          <Form.Group className="mb-3">
            <Form.Label>Palavras chaves:</Form.Label>
            {resource.palavras_chaves ? resource.palavras_chaves.map(palavra => ` ${palavra},`) : "Carregando..."} 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Coleção: {`${resource.colecao_id ? resource.colecao_id.titulo : "Carregando..."}`}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button onClick={(e) => {e.preventDefault(); updateResource(resource, params.id)} } disabled={!editable} variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        </Layout>
      </Center>
  )
}

export default Resource
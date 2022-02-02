import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import API from 'api';

const Resource = () => {

  const params = useParams();
  const [editable, setEditable] = useState(false)
  const [resource, setResource] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await API.getResourceById(params.id)
      setResource(response)
      console.log(response.titulo)
    }
    fetchData();
  }, [])

  const getAttributeBykey = (resource, key) => {
    if (resource[key]) {
      return resource[key]
    }
    return "Carregando..."
  }

  const getDateInputFromIso = (isoformat) => {
    if(isoformat === "Carregando...") return "Carregando..."
    const date = new Date(isoformat);
    return date.toISOString().substring(0, 10);
  }
  
  return (
      <Center width="1500px">
        <Navbar/>
        <Layout>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control value={getAttributeBykey(resource, "titulo")} disabled={!editable} type="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descricao</Form.Label>
            <Form.Control value={getAttributeBykey(resource, "descricao")} as="textarea" rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link</Form.Label>
            <Form.Control value={getAttributeBykey(resource, "link")} rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagem (link)</Form.Label>
            <Form.Control value={getAttributeBykey(resource, "imagem")} rows={3} disabled={!editable} type="text"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de criação</Form.Label>
            <Form.Control value={getDateInputFromIso(getAttributeBykey(resource, "data_de_criacao"))} disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" rows={3} type="date"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de registro</Form.Label>
            <Form.Control value={getDateInputFromIso(getAttributeBykey(resource, "data_de_registro"))} disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" rows={3} type="date"  />
          </Form.Group>

          <Form.Check 
            type="checkbox"
            label="Marque aqui para editar o recurso"
            onChange={(e) => setEditable(e.target.checked)}
          />

          <Button disabled={!editable} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Layout>
      </Center>
  )
}

export default Resource
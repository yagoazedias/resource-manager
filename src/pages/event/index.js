import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import API from 'api';
import Utils from 'utils';

const Event = () => {

  const params = useParams();
  const [editable, setEditable] = useState(false)
  const [event, setEvent] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await API.getEventById(params.id)
      setEvent(response)
    }
    fetchData();
  }, [])

  const updateEvent = async (event, id) => {
    const response = await API.updateEvent(event, id);
    if (response.status == 200) {
        alert("Evento foi atualizado com sucesso");
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
            <h5>Informações do evento</h5>
          </Layout>

          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control 
            onChange={e => { Utils.updateResourceByKey(event, "titulo", e.target.value, setEvent)}} 
            value={Utils.getAttributeBykey(event, "titulo")} 
            disabled={!editable} type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de inicio</Form.Label>
            <Form.Control 
            onChange={e => { Utils.updateResourceByKey(event, "data_de_inicio", e.target.value, setEvent)}} 
            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(event, "data_de_inicio"))} 
            disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
            rows={3} type="date"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de fim</Form.Label>
            <Form.Control 
            onChange={e => { Utils.updateResourceByKey(event, "data_de_fim", e.target.value, setEvent)}} 
            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(event, "data_de_fim"))} 
            disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
            rows={3} type="date"  />
          </Form.Group>

          <Form.Check 
            type="checkbox"
            label="Marque aqui para editar o curso"
            onChange={(e) => setEditable(e.target.checked)}
          />

          <Form.Group className="mb-3">
            <Button 
            onClick={(e) => {e.preventDefault(); updateEvent(event, params.id)} } 
            disabled={!editable} variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>

        </Form>
        </Layout>
      </Center>
  )
}

export default Event
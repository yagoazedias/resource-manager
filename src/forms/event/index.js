import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';

import API from 'api';
import Utils from 'utils';

const EventCreation = () => {  

    const [event, setEvent] = useState({})

    const createEvent = async (event) => {
        const response = await API.createEvent(event);
        if (response.status == 200) {
            alert("Evento atualizado com sucesso");
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
                        <h5>Criação de um evento</h5>
                    </Layout>
                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(event, "titulo", e.target.value, setEvent)} 
                            value={event.titulo} 
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de inicio</Form.Label>
                        <Form.Control 
                            onChange={e => { Utils.updateResourceByKey(event, "data_de_inicio", e.target.value, setEvent)}}
                            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(event, "data_de_inicio"))}
                            disabled={false} 
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            rows={3} 
                            type="date"  />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de fim</Form.Label>
                        <Form.Control 
                            onChange={e => { Utils.updateResourceByKey(event, "data_de_fim", e.target.value, setEvent)}}
                            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(event, "data_de_fim"))}
                            disabled={false} 
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            rows={3} 
                            type="date"  />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button onClick={(e) => {e.preventDefault(); createEvent(event)} } disabled={false} variant="primary" type="submit">Submit</Button>
                    </Form.Group>

                </Form>
            </Layout>
        </Center>
    )
}

export default EventCreation
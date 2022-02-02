import { Subtitle, Layout } from 'atoms';
import React from 'react';
import { Link } from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';

import API from 'api';

const deleteEvent = async (id) => {
    try {
        const response = await API.deleteEvent(id);
        if (response.status == 200) {
            alert("Evento foi deletado com sucesso");
            window.location.reload();
        } else {
            throw new Error("SQL error")
        }
    } catch (e) {
        alert(`Não foi possível deletar o Evento`);
    }
}

const Event = ({ event }) => (
    <ListGroup.Item m="10px" maxWidth="400px">
        <Link to={`/evento/${event.id}`}>{event.titulo}</Link>
        <Button onClick={() => deleteEvent(event.id)} style={{marginLeft: "20px"}} variant="danger">Delete</Button>
    </ListGroup.Item>
)

const Events = ({ events }) => (
    <Layout mt="25px">
        <Subtitle>Lista de eventos</Subtitle>
        <ListGroup>
            {events.map(event => (
                <Event event={event} key={event.id} />
            ))}
        </ListGroup>
    </Layout>
)

export default Events;
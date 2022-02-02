import { Subtitle, Layout } from 'atoms';
import React from 'react';
import { Link } from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';

const Event = ({ event }) => (
    <ListGroup.Item m="10px" maxWidth="400px">
        <Link to={`/evento/${event.id}`}>{event.titulo}</Link>
        <Button style={{marginLeft: "20px"}} variant="danger">Delete</Button>
    </ListGroup.Item>
)

const Events = ({ events }) => (
    <Layout mt="25px">
        <Subtitle>Lista de eventos</Subtitle>
        {console.log(events)}
        <ListGroup>
            {events.map(event => (
                <Event event={event} key={event.id} />
            ))}
        </ListGroup>
    </Layout>
)

export default Events;
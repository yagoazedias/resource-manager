import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';

import API from 'api';
import Utils from 'utils';

const CourseCreation = () => {  

    const [course, setCourse] = useState({})

    const createCourse = async (course) => {
        const response = await API.createCourse(course);
        if (response.status == 200) {
            alert("Curso atualizado com sucesso");
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
                        <h5>Criação de um curso</h5>
                    </Layout>
                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control 
                            onChange={e => Utils.updateResourceByKey(course, "titulo", e.target.value, setCourse)} 
                            value={course.titulo} 
                            disabled={false} 
                            type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de registro</Form.Label>
                        <Form.Control 
                            onChange={e => { Utils.updateResourceByKey(course, "data_de_registro", e.target.value, setCourse)}}
                            value={Utils.getDateInputFromIso(Utils.getAttributeBykey(course, "data_de_registro"))}
                            disabled={false} 
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            rows={3} 
                            type="date"  />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button onClick={(e) => {e.preventDefault(); createCourse(course)} } disabled={false} variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form.Group>

                </Form>
            </Layout>
        </Center>
    )
}

export default CourseCreation
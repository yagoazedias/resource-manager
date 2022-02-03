import { Subtitle, Layout } from 'atoms';
import React from 'react';
import { Link } from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';

import API from 'api';

const deleteCourse = async (id) => {
    try {
        const response = await API.deleteCourse(id);
        if (response.status == 200) {
            alert("Curso foi deletado com sucesso");
            window.location.reload();
        } else {

            throw new Error("SQL error")
        }
    } catch (e) {
        alert(`Não foi possível deletar o Curso`);
    }
}

const Course = ({ course }) => (
    <ListGroup.Item m="10px" maxWidth="400px">
        <Link to={`/curso/${course.id}`}>{course.titulo}</Link>
        <Button onClick={() => deleteCourse(course.id)} style={{marginLeft: "20px"}} variant="danger">Delete</Button>
    </ListGroup.Item>
)

const Courses = ({ courses }) => (
    <Layout mt="25px">
        <Subtitle>Lista de cursos</Subtitle>
        <ListGroup>
            {courses.map(course => (
                <Course course={course} key={course.id} />
            ))}
        </ListGroup>
    </Layout>
)

export default Courses;
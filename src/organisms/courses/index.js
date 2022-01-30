import { Subtitle, Layout } from 'atoms';
import React from 'react';
import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';

const Course = ({ course }) => (
    <ListGroup.Item m="10px" maxWidth="400px"><Link to={`/curso/${course.id}`}>{course.titulo}</Link></ListGroup.Item>
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
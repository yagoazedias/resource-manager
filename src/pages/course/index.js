import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import API from 'api';
import Utils from 'utils';

const Course = () => {

  const params = useParams();
  const [editable, setEditable] = useState(false)
  const [course, setCourse] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await API.getCourseById(params.id)
      setCourse(response)
    }
    fetchData();
  }, [])

  const updateCourse = async (course, id) => {
    const response = await API.updateCourse(course, id);
    if (response.status == 200) {
        alert("Curso foi atualizado com sucesso");
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
            <h5>Informações do curso</h5>
          </Layout>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control onChange={e => { Utils.updateResourceByKey(course, "titulo", e.target.value, setCourse)}} value={Utils.getAttributeBykey(course, "titulo")} disabled={!editable} type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data de registro</Form.Label>
            <Form.Control onChange={e => { Utils.updateResourceByKey(course, "data_de_registro", e.target.value, setCourse)}} value={Utils.getDateInputFromIso(Utils.getAttributeBykey(course, "data_de_registro"))} disabled={!editable} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" rows={3} type="date"  />
          </Form.Group>

          <Form.Check 
            type="checkbox"
            label="Marque aqui para editar o recurso"
            onChange={(e) => setEditable(e.target.checked)}
          />

          <Form.Group className="mb-3">
            <Button onClick={(e) => {e.preventDefault(); updateCourse(course, params.id)} } disabled={!editable} variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>

        </Form>
        </Layout>
      </Center>
  )
}

export default Course
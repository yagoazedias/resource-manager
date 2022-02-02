import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Navbar } from 'organisms';
import { Formik } from 'formik';
import { Routes, Route, useParams } from "react-router-dom";

import API from 'api';

const Resource = () => {
  const [resource, setResource] = useState([])
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await API.getResourceById(params.id)
      setResource(response)
    }
    fetchData();
  }, [])

  const onSubmit = values => {
    console.log(values)
  }
  
  return (
      <Center width="1500px">
        <Navbar/>
        <Layout>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            titulo: "",
            descricao: "",
            data_de_criacao: "",
            data_de_registro: "",
            colecao_id: {
                "id": 94,
                titulo: "Os eventos do ano de 2026 nova"
            }
        }}
        >
          {({
            values,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                value={values.titulo}
              />
              <input
                type="text"
                name="text"
                value={values.titulo}
              />
              <button type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
        </Layout>
      </Center>
  )
}

export default Resource
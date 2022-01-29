import React, { useEffect, useState } from 'react';
import { Title, Layout, Flex } from './atoms';
import { Card } from './molecules';

import API from './api';

const Resource = ({ resource }) => (
  <Layout flex={1} maxWidth="400px">
    <Card title={resource.titulo} description={resource.descricao} image={resource.imagem} />
  </Layout>
)

const ResourceList = ({ resources }) => (
    <Flex flexDirection="row" flexWrap='wrap'>
      {resources.length > 0 
        ? resources.map(resource => (
          <Resource resource={resource} />
        )) 
        : "carregando"}
    </Flex>
)

function App() {

  const [resources, setResource] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resources = await API.getAllResources()
      setResource(resources)
    }
    fetchData();
  }, [])

  return (
      <Layout>
        <Title>Lista de recursos</Title>
        <ResourceList resources={resources} />
      </Layout>
  )
}

export default App;

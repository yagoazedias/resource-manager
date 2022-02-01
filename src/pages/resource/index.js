import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Resources, Navbar } from 'organisms';

import API from 'api';

const deleteResource = async (id) => {
  try {
    const response = await API.deleteResource(id);
    if (response.status == 200) {
      alert("Recurso foi deletado com sucesso");
      window.location.reload();
    } else {
      console.log(response)
      throw new Error("SQL error")
    }
  } catch (e) {
    alert(`Não foi possível deletar o recurso pois esse está relacionado a um autor existente`);
  }
}

const Resource = () => {
  const [resources, setResource] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resources = await API.getAllResources()
      setResource(resources)
    }
    fetchData();
  }, [])
  
  return (
      <Center width="1500px">
        <Navbar/>
        <Layout>
          <Resources deleteResource={deleteResource} hasDeleteButton resources={resources} />
        </Layout>
      </Center>
  )
}

export default Resource
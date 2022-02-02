import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Resources, Navbar } from 'organisms';

import API from 'api';

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
          <Resources hasDeleteButton resources={resources} />
        </Layout>
      </Center>
  )
}

export default Resource
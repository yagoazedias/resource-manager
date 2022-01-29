import React, { useEffect, useState } from 'react';
import { Title, Layout, Center } from 'atoms';
import { Resources } from 'organisms';

import API from 'api';

const Home = () => {
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
          <Layout>
            <Title>Lista de recursos</Title>
            <Resources resources={resources} />
          </Layout>
        </Center>
    )
}

export default Home
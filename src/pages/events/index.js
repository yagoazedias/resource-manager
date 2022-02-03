import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Events, Navbar } from 'organisms';

import API from 'api';

const EventsPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchData() {
      const events = await API.getAllEvents()
      setEvents(events)
    }
    fetchData();
  }, [])
  
  return (
      <Center width="1500px">
        <Navbar/>
        <Layout>
          <Events hasDeleteButton events={events} />
        </Layout>
      </Center>
  )
}

export default EventsPage
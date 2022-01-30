import React, { useEffect, useState } from 'react';
import { Title, Layout, Center } from 'atoms';
import { Resources, Courses, Events } from 'organisms';

import API from 'api';

const Home = () => {
    const [resources, setResource] = useState([])
    const [courses, setCourses] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
      async function fetchData() {
        const resources = await API.getAllResources()
        setResource(resources)
      }
      fetchData();
    }, [])

    useEffect(() => {
      async function fetchData() {
        const courses = await API.getAllResources()
        setCourses(courses)
      }
      fetchData();
    }, [])

    useEffect(() => {
      async function fetchData() {
        const events = await API.getAllEvents()
        setEvents(events)
      }
      fetchData();
    }, [])

    return (
        <Center width="1500px">
          <Layout>
            <Title>Home</Title>
            <Resources resources={resources} />
            <Courses courses={courses} />
            <Events events={events} />
          </Layout>
        </Center>
    )
}

export default Home
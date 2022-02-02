import React, { useEffect, useState } from 'react';
import { Title, Layout, Center } from 'atoms';
import { Resources, Courses, Events, Navbar } from 'organisms';

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
        const courses = await API.getAllCourses()
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
          <Navbar />
          <Layout>
            <Layout mt="30px">
              <Courses courses={courses} />
            </Layout>
            <Layout mt="30px">
              <Events events={events} />
            </Layout>
            <Layout mt="30px">
              <Resources resources={resources} />
            </Layout>
          </Layout>
        </Center>
    )
}

export default Home
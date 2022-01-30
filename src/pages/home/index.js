import React, { useEffect, useState } from 'react';
import { Title, Layout, Center } from 'atoms';
import { Resources, Courses } from 'organisms';

import API from 'api';

const Home = () => {
    const [resources, setResource] = useState([])
    const [courses, setCourses] = useState([])

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

    return (
        <Center width="1500px">
          <Layout>
            <Title>Home</Title>
            <Resources resources={resources} />
            <Courses courses={courses} />
          </Layout>
        </Center>
    )
}

export default Home
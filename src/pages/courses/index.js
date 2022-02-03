import React, { useEffect, useState } from 'react';
import { Layout, Center } from 'atoms';
import { Courses, Navbar } from 'organisms';

import API from 'api';

const CoursesPage = () => {
  const [courses, setCourse] = useState([])

  useEffect(() => {
    async function fetchData() {
      const courses = await API.getAllCourses()
      setCourse(courses)
    }
    fetchData();
  }, [])
  
  return (
      <Center width="1500px">
        <Navbar/>
        <Layout>
          <Courses hasDeleteButton courses={courses} />
        </Layout>
      </Center>
  )
}

export default CoursesPage
import axios from 'axios';

class Api {
    
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }

    async getAllCollections() {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/colecao/`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async getAllResources() {
        try {
            const response = await axios.get(`${this.host}:${this.port}/api/v1/recurso`)
            return response.data
          } catch (e) {
            console.error(e)
          }
    }

    async getResourceById(id) {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/recurso/${id}`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async getEventById(id) {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/evento/${id}`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async getAllCourses() {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/curso/`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async getCourseById(id) {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/curso/${id}`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async deleteCourse(id) {
      try {
        const response = await axios.delete(`${this.host}:${this.port}/api/v1/curso/${id}`)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async deleteEvent(id) {
      try {
        const response = await axios.delete(`${this.host}:${this.port}/api/v1/evento/${id}`)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async getAllEvents() {
      try {
          const response = await axios.get(`${this.host}:${this.port}/api/v1/evento`)
          return response.data
        } catch (e) {
          console.error(e)
        }
    }

    async deleteResource(id) {
      try {
        const response = await axios.delete(`${this.host}:${this.port}/api/v1/recurso/${id}`)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async updateResource(resource, id) {
      try {
        const response = await axios.put(`${this.host}:${this.port}/api/v1/recurso/${id}`, resource)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async updateCourse(course, id) {
      try {
        const response = await axios.put(`${this.host}:${this.port}/api/v1/curso/${id}`, course)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async updateEvent(event, id) {
      try {
        const response = await axios.put(`${this.host}:${this.port}/api/v1/evento/${id}`, event)
        return response
      } catch (e) {
        console.error(e)
      }
    }

    async createResource(resource, colecaoId) {
      try {
          const response = await axios.post(`${this.host}:${this.port}/api/v1/recurso/colecao/${colecaoId}/`, resource)
          return response
        } catch (e) {
          console.error(e)
        }
    }

    async createCourse(course) {
      try {
          const response = await axios.post(`${this.host}:${this.port}/api/v1/curso/`, course)
          console.log(response)
          return response
        } catch (e) {
          console.error(e)
        }
    }
}

const API = new Api("http://localhost", "8080") 
export default API;
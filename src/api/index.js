import axios from 'axios';

class Api {
    
    constructor(host, port) {
        this.host = host;
        this.port = port;
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
          console.log(`${this.host}:${this.port}/api/v1/recurso/${id}`)
          const response = await axios.get(`${this.host}:${this.port}/api/v1/recurso/${id}`)
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
}

const API = new Api("http://localhost", "8080") 
export default API;
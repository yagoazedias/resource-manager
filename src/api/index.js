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
}

const API = new Api("http://localhost", "8080") 
export default API;
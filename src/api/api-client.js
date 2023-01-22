const axios = require('axios');

class AxiosApiClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL
        });
        this.client.interceptors.request.use(request => {
            if (request.data !== undefined) {
             console.log('Request Body: \n' + JSON.stringify(request.data));
             }
         return request;
        });
        this.client.interceptors.response.use(response => {
         if (response.data !== undefined) {
              console.log('Status Code: ' + response.status);
              console.log('Response Body: \n' + JSON.stringify(response.data));
            }
         return response;
        }, function (error) {
         console.log('Status Code: \n' + error.response.status);
         console.log('Response Body: \n' + JSON.stringify(error.response.data));
         return Promise.reject(error);
        });
    }

    setHeaders(headers) {
        this.client.defaults.headers = {
            ...this.client.defaults.headers,
            ...headers
        };
    }

    setBearerAuth(token) {
        this.setHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    setTimeout(timeout) {
        this.client.defaults.timeout = timeout;
    }

    async get(path, params) {
        console.log(`\nMaking GET API Call: ${path}`);
        return this.client.get(path, { params }).then((res) => res).catch((err) => err);
    }

    async post(path, data) {
        console.log(`\nMaking POST API Call: ${path}`);
        return this.client.post(path, { data }).then((res) => res).catch((err) => err);
    }

    async put(path, data) {
        console.log(`\nMaking PUT API Call: ${path}`);
        return this.client.put(path, { data }).then((res) => res).catch((err) => err);
    }

    async delete(path) {
        console.log(`\nMaking DELETE API Call: ${path}`);
        return this.client.delete(path).then((res) => res).catch((err) => err);
    }

}

module.exports = AxiosApiClient;

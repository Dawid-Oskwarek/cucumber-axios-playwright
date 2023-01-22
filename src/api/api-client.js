const axios = require('axios');

class AxiosApiClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL
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

    setJsonBody(data) {
        this.client.defaults.headers['Content-Type'] = 'application/json';
        this.client.defaults.data = data;
    }

    async get(path, params) {
        console.log(`\nMaking GET API Call: ${path}`);
        return this.client.get(path, { params }).then((res) => res).catch((err) => err);
    }

    async post(path) {
        console.log(`\nMaking POST API Call: ${path}`);
        return this.client.post(path).then((res) => res).catch((err) => err);
    }

    async put(path) {
        console.log(`\nMaking PUT API Call: ${path}`);
        return this.client.put(path).then((res) => res).catch((err) => err);
    }

    async delete(path) {
        console.log(`\nMaking DELETE API Call: ${path}`);
        return this.client.delete(path).then((res) => res).catch((err) => err);
    }
}

module.exports = AxiosApiClient;

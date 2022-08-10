const axios = require('axios');
require('dotenv').config();
const config = require('./axios-config');

config.axiosConfig();
const url = process.env.BASEURL;

module.exports = {
    async postRequest(requestBody) {
        console.log(`\nMaking POST API Call: ${url}/api/users`);
        return axios.post(`${url}/api/users`, requestBody).then((res) => res).catch((err) => err);
    }
}
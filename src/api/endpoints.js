const axios = require('./axios-config.js');
require('dotenv').config();

const url = process.env.BASEURL;

module.exports = {
    async postRequest(requestBody) {
        console.log(`\nMaking POST API Call: ${url}/api/users`);
        return axios.post(`${url}/api/users`, requestBody).then((res) => res).catch((err) => err);
    }
}
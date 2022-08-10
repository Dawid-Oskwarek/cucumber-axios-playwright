const axios = require('axios');


module.exports = {
    axiosConfig() {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.interceptors.request.use(request => {
            if (request.data !== undefined) {
                console.log('Request Body: \n' + JSON.stringify(request.data));
            }
            return request;
        });

        axios.interceptors.response.use(response => {
            if (response.data !== undefined) {
                console.log('Response Body: \n' + JSON.stringify(response.data));
            }
            return response;
        });
    }
}
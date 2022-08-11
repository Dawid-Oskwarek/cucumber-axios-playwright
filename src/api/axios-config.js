const axios = require('axios').default;


axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use(request => {
    if (request.data !== undefined) {
        console.log('Request Body: \n' + JSON.stringify(request.data));
    }
    return request;
});

axios.interceptors.response.use(response => {
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
    
module.exports = axios;

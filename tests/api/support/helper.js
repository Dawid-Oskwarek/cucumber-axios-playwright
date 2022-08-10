const { expect } = require('chai');

function checkStatusCode(response, expectedStatusCode) {
    if(expectedStatusCode >= 200 && expectedStatusCode < 300) {
        if (response?.response?.status >= 400) {
            throw new Error (`API Call Failed: ${response}`);
        }
        expect(response.status).to.equal(expectedStatusCode);
    } else {
        expect(response.response.status).to.equal(expectedStatusCode);
    }
}

module.exports = { checkStatusCode };

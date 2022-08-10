const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('../../../src/api/endpoints');
const { expect } = require('chai');

Given('a json request is set', function() {
    this.requestBody = {
        "name": "morpheus",
        "job": "leader"
    }
});

When('I send a POST request', async function() {
    this.response = await axios.postRequest(this.requestBody);
});

Then('the response is valid', function() {
    expect(this.response.data.name, 'Name does not match').to.equal('morpheus');
    expect(this.response.data.job, 'Job does not match').to.equal('leader');
});
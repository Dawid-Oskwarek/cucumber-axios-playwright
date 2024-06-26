const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('../../../src/api/endpoints');
const AxiosApiClient = require('../../../src/api/api-client');
const { expect } = require('chai');

const url = process.env.BASEURL;

Given('a json request is set', function() {
    this.requestBody = {
        "name": "morpheus",
        "job": "leader"
    }
});

When('I send a POST request', async function() {
    this.response = await axios.postRequest(this.requestBody);
});

When('I send a POST request using API Client', async function() {
    const client = new AxiosApiClient(url);
    this.response = await client.post('/api/users', this.requestBody);
});

Then('the response is valid', function() {
    expect(this.response.data.name || this.response.data.data.name, 'Name does not match').to.equal('morpheus');
    expect(this.response.data.job || this.response.data.data.job, 'Job does not match').to.equal('leader');
});
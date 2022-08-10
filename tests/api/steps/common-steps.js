const { Then } = require('@cucumber/cucumber');
const { checkStatusCode } = require('../support/helper.js');

Then('the status code is {int}', function(statusCode){
    checkStatusCode(this.response, statusCode);
});

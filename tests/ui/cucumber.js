module.exports = {
 default: {
  requireModule: ['ts-node/register'],
  require: ['tests/ui/**/*.ts'],
  format: ['html:reports/cucumber-report.html']
 }
}
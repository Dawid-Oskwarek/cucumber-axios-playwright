@api
Feature: Sample API example

  Scenario: Send API POST Request
    Given a json request is set
    When I send a POST request
    Then the status code is 201
    And the response is valid

  Scenario: Send API POST Request 2
    Given a json request is set
    When I send a POST request
    Then the status code is 200
    And the response is valid
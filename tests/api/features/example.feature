@api
Feature: Sample API example

  Scenario: Send API POST Request
    Given a json request is set
    When I send a POST request
    Then the status code is 201
    And the response is valid


  Scenario: Send API POST Request using API Client
    Given a json request is set
    When I send a POST request using API Client
    Then the status code is 201
    And the response is valid


    Scenario: Send API POST Request using API Client 2
    Given a json request is set
    When I send a POST request using API Client
    Then the status code is 200
    And the response is valid
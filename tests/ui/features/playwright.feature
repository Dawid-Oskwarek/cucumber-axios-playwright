@ui
Feature: Playwright Tests

  Scenario: Click a button
    Given I access the website
    When I click on class button
    Then I receive a success message

Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given I open the SauceDemo login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the products page

  Scenario: User logs in with invalid credentials
    Given I open the SauceDemo login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message

  Scenario: User logs out successfully
    Given I am logged into SauceDemo
    When I open the side menu
    And I click the logout button
    Then I should be redirected to the login page

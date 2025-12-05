@LoginPage
Feature: Login Page
        
  @titleVerification      
  Scenario: Verify Login functionality
    Given I navigate to the home page
    When I navigate to the login page
    # Then I should be able to login with valid credentials
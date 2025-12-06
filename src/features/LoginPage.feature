@LoginPage
Feature: Login Page
        
  @titleVerification      
  Scenario: Verify Login functionality
    Given I navigate to the home page
    When I click on Account and Lists
    # And I click on Sign-In
    Then I should see the Sign-In page
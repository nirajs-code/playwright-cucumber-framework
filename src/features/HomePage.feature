@homePage
Feature: Home Page
        
  @titleVerification      
  Scenario: Verify Home Page Title
    Given I navigate to the home page
    Then the page title should be "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more"
@content-type
Feature: Provider Firm Offices content types
  
  Scenario: Authenticated request PDA-001-TC01 
    Given I have valid API access keys
    When I make a GET request for office information with office number 20029
    Then I will receive a 200 OK response
    And I will receive a JSON response
  
  Scenario: Authenticated request content type 
    Given I have valid API access keys
    When I make a text/plain GET request for office information with office number 20029
    Then I will receive a 200 OK response
    And I will receive a JSON response

Feature: Provider Firm Offices
  
  Scenario: Authenticated request PDA-001-TC01 
    Given I have valid API access keys
    When I make a GET request for office information with office number 20029
    Then I will receive a 200 OK response
    And I will receive a JSON response

  Scenario: Unauthorised access PDA-003-TC01
    Given I do not have valid API access keys
    When I make a GET request for office information with office number 20029 
    Then I will receive a 401 Unauthorized response
  
  Scenario: Get active office schedules SCH-001-TC01 
    Given I have valid API access keys 
    When I make a GET request for provider office schedule with office number 20029
    Then I will receive a 403 Forbidden response

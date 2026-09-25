Feature: Provider Firm Offices
  
  Scenario: Authenticated DELETE request for provider offices with office number
    Given I have valid API access keys
    When I make a DELETE request for office information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated PATCH request for provider offices with office number
    Given I have valid API access keys
    When I make a PATCH request for office information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated POST request for provider offices with office number
    Given I have valid API access keys
    When I make a POST request for office information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated PUT request for provider offices with office number
    Given I have valid API access keys
    When I make a PUT request for office information with office number 20029
    Then I will receive a 405 Method Not Allowed response

  Scenario: Authenticated DELETE request for provider office schedule details with office number
    Given I have valid API access keys
    When I make a DELETE request for office provider schedule information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated PATCH request for provider office schedule details with office number
    Given I have valid API access keys
    When I make a PATCH request for office provider schedule information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated POST request for provider office schedule details with office number
    Given I have valid API access keys
    When I make a POST request for office provider schedule information with office number 20029
    Then I will receive a 405 Method Not Allowed response
  
  Scenario: Authenticated PUT request for provider office schedule details with office number
    Given I have valid API access keys
    When I make a PUT request for office provider schedule information with office number 20029
    Then I will receive a 405 Method Not Allowed response

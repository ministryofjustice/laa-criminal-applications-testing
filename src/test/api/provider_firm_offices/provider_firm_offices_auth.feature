Feature: Provider Firm Offices

  Scenario: Unauthorised access
    Given I do not have valid API access keys
    When I make a provider firm offices GET request for getting office information
    Then I will receive a 401 Unauthorized response

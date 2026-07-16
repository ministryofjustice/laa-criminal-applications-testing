Feature: Test API contact details

Scenario:
    When I send a GET request to 'https://rest.stevenlau.dev/contact'
    Then the status is 200
    And the response should match the contact schema
    
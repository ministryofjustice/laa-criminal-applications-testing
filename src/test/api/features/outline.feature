Feature: Test a data table

Scenario: eating
    Given there are <start> cucumbers
    When I eat <eat> cucumbers
    Then I should have left <left> cucumbers

    Examples:
        | start | eat | left |
        |    12 |   5 |    7 |
        |    20 |   5 |   16 |

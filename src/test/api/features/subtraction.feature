Feature: Subtract numbers

  Scenario Outline: Subtract two variable values
    Given the following subtraction cases:
      | firstNumber | secondNumber | expectedResult |
      | <first>     | <second>     | <expected>     |
    When each subtraction is calculated
    Then every calculated result should equal the expected result

    Examples:
      | first | second | expected |
      | 10    | 3      | 7        |
      | 20    | 5      | 15       |
      | 8     | 10     | -2       |
      | 100   | 25     | 75       |

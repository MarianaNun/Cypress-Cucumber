Feature: Perform main validations on search page

Scenario: Search by criteria
When I search "Michael Jordan"
Then I see an image related to the search among the results
And I see results from following pages
    |page       |
    |wikipedia  |
    |nba.com    |

Feature: Check the search API


Scenario: Check images on the response
When I search in the API "dog" 
Then I get an status code 200
And I see images on the response

Scenario: Check URLs on the response
When I search in the API "dogecoin" 
Then I get an status code 200
And I see URLs on the response

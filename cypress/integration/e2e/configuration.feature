Feature: Page configuration menu

Scenario: Change the background color
Given I am on the "theme" configuration page
When I select the Terminal theme
Then the background color change


Scenario: Change the page language
Given I am on the "settings" configuration page
When I select "Latviešu (Latvija)" language
Then I see the selected language on the page 

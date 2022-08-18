import { When, Then } from 'cypress-cucumber-preprocessor/steps';

let body;

When('I search in the API {string}', (searchString) => {
    cy.request({url: Cypress.env('API_URL'),qs: {q:searchString, format:'json'}}).as('queryResponse')
})

Then('I get an status code 200', () => {
    cy.get('@queryResponse').should((response) => {
        expect(response.status).to.eq(200);
        body = JSON.parse(response.body)
    })
})

Then('I see images on the response', () => {
   let relatedTopics= body.RelatedTopics;
   relatedTopics.forEach( (element)=> {
        //Use RelatedTopics list instead Result because for this search Result list is empty
        if(element.hasOwnProperty('Topics')){
            let topics = element.Topics
            topics.forEach( (topic)=> {
                cy.task('log', topic.Icon.URL)
            })
        }
        else{
            cy.task('log', element.Icon.URL)
        }
    });
})

Then('I see URLs on the response', () => {
    let relatedResults= body.Results;
    relatedResults.forEach( (element)=> {
        cy.task('log', element.FirstURL)
    });
 })
describe('Search API testing', () => {
    it('Get images from the response', () => {
        cy.request({url: Cypress.env('API_URL'),qs: {q:'dog',format:'json'}})
        .then((result) => {
            expect(result).property('status').to.equal(200);
            return JSON.parse(result.body).RelatedTopics
        }).each( (element)=> {
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
        })
    });
    it('Get URLs from the response', () => {
        cy.request({url: Cypress.env('API_URL'),qs: {q:'dogecoin',format:'json'}})
        .then((result) => {
            expect(result).property('status').to.equal(200);
            return JSON.parse(result.body).Results
        }).each( (element)=> {
            cy.task('log', element.FirstURL)
        })
    });
 });
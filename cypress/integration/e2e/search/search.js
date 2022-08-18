import { When, Then } from 'cypress-cucumber-preprocessor/steps';

let searchTerm;

When('I search {string}', (searchString) => {
    cy.visit('');
    searchTerm = searchString;
    cy.get('input[class*="search"]').first().type(searchString);
    cy.get('form').submit();
})

Then('I see an image related to the search among the results', () => {
    cy.get(`.results--sidebar a[href*="${searchTerm}"] img.module--about__img`)
    .should('be.visible')
})

Then('I see results from following pages', (datatable) => {
    //to check in the second page
    cy.get('[class*="result--more__btn"]').click()
    datatable.hashes().forEach((element) => {
        cy.get(`.results a[href*="${element.page}"]`)
        .should('be.visible')
    });
})
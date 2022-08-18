import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import '../../../support/commands'

let lang;

Given('I am on the {string} configuration page', (page) => {
    cy.visit('/');
    cy.get('[class*="header"] [class*="menu"]').first().click({force: true});
    cy.get(`a[href$="${page}"]`).last().click();
})

When('I select the Terminal theme', () => {
    cy.get('[data-theme-id="t"] label').first().click();
    //this action was remove because on the search page the black baground is not visisble
    //cy.get('.set-main-footer a').click()
})

Then('the background color change', () => {
    cy.get('body')
    .should('have.css', 'background-color')
    .and('eq', 'rgb(34, 34, 34)');
})

When('I select {string} language', (language) => {
    cy.get('#setting_kad').select(`${language}`);
    lang = language;
})

Then('I see the selected language on the page', () => {
    cy.getLanguage(lang)
    .then((selectedLand) => { 
        cy.task('log', selectedLand)
        cy.get('html')
        .should('have.attr', 'lang', selectedLand);
    })
})
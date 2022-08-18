
Cypress.Commands.add('getLanguage', (language) => { 
    cy.fixture('/language.json')
    .then((languageFixture) => {
        return  Object.keys(languageFixture['languages']).find(key => languageFixture['languages'][key] === language);
      })
 })

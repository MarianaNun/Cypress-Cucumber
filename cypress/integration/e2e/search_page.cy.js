describe('Perform main validations on search page', () => {
  it('Search by criteria', () => {
    cy.visit('')
    cy.get('input[class*="search"]').first().type('Michael Jordan')
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()

    cy.get('.results--sidebar a[href*="Michael_Jordan"] img.module--about__img')
    .should('be.visible')
//to check in the second page
    cy.get('[class*="result--more__btn"]').click()
    cy.get('.results a[href*="nba.com"]')
    .should('be.visible')
  })
})
describe('Make configurations on the page', () => {
  it('Change the background color', () => {
    cy.visit('/')
    cy.get('[class*="header"] [class*="menu"]').first().click({force: true})

    cy.get('a[href*="#theme"]').last().click()
    cy.get('[data-theme-id="t"] label').first().click()
    //this action was remove because on the search page the black baground is not visisble
    //cy.get('.set-main-footer a').click()
    cy.get('body')
    .should('have.css', 'background-color')
    .and('eq', 'rgb(34, 34, 34)')
  })
  
  it('Change the language', () => {
    cy.visit('/')
    cy.get('[class*="header"] [class*="menu"]').first().click({force: true})

    cy.get('a[href$="settings"]').last().click()
    cy.get('#setting_kad').select('lv_LV')
    cy.get('html')
    .should('have.attr', 'lang', 'lv-LV')
  })
})
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      },
    
    baseUrl: 'https://duckduckgo.com',
    screenshotOnRunFailure: true,
    specPattern:["**/*.cy.js"]
  },
  env: {
    API_URL: 'https://api.duckduckgo.com/'
  }
});

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      }),
      on('file:preprocessor', cucumber())
      },
    
    baseUrl: 'https://duckduckgo.com',
    screenshotOnRunFailure: true,
    //specPattern:["**/*.cy.js"],
    specPattern: "**/*.feature",
  },
  env: {
    API_URL: 'https://api.duckduckgo.com/'
  }
});

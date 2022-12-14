const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs');
const { exec } = require('child_process')

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
      on('file:preprocessor', cucumber()),
      on('after:run', (results) => {
        if (results) {
          fs.mkdirSync("cypress/.run", { recursive: true });
          fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
          exec('node cucumber-html-report.js');
        }
      })
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

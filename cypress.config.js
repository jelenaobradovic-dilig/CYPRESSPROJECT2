const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kxtqh4',
  e2e: {
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
    },
    specPattern:'cypress/tests/*.js'
  },
  
});

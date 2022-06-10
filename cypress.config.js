{
 
  const { defineConfig } = require("cypress");

  module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  })
  
module.exports = defineConfig({
  projectId: 'vkipne',
  env:{
    RETRIES:2
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
}
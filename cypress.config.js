{
 
  const { defineConfig } = require("cypress");

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
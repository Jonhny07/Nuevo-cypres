const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vsr3xk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app/",
    watchForFileChanges: false,
    defaultCommandTimeout:30000
  },
  env:{
    "usuario":"pushingit",
    "password":"123456!"
  }
});

//npx cypress open --config baseUrl=https://pushing-front.vercel.app/

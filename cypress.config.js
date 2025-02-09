const { defineConfig } = require("cypress");

module.exports = defineConfig({
  nodeVersion: "system",
  pageLoadTimeout: 500000,
  requestTimeout: 30000,
  retries:0,
  chromeWebSecurity: false,
  WebSecurity: false,
  experimentalStudio: true,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async (details) => {
        await beforeRunHook(details);
      }),
   
      on('task', {
        readDirectory(directory) {
          return fs.readdirSync(directory);
        }
      });
    },
    baseUrl: 'https://eetestsystem.tooljet.com',
    supportFile: 'cypress/support/commands.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false
  },
});

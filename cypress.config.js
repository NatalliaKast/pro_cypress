
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // Настройка событий Node
        },
        baseUrl: 'https://www.saucedemo.com',
    },
    env: {
        environment: 'feature',
    },
});

// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands/commands';
import './commands/login-page.ui.commands';
import './commands/header-comp.ui.commands';
import './commands/checkout-page.ui.commands';

// Import necessary modules and resources
import l10n from './localization/l10n.json';
import colours from './colours/default-theme-colours.json';
import selectors from './selectors/selectors';
import urls from './urls/urls';
import utils from './utils/utils';
import userRoles from './requirements/user-roles';
import bugLog from './bugs/bug-log.json';
import requirements from './requirements/requirements';
import products from './products/products';

// Make resources globally available
global.l10n = l10n;
global.colours = colours;
global.urls = urls;
global.utils = utils;
global.userRoles = userRoles.userRoles;
global.bugLog = bugLog;
global.reqs = requirements;
global.products = products;
// Separate selectors by pages
global.loginPage = selectors.loginPage;
global.inventoryPage = selectors.inventoryPage;
global.cartPage = selectors.cartPage;
global.headerComp = selectors.headerComp;
global.footerComp = selectors.footerComp;
global.productPage = selectors.productPage;
global.checkoutPage = selectors.checkoutPage;
global.checkoutOverviewPage = selectors.checkoutOverview;
global.checkoutCompletePage = selectors.checkoutCompletePage;

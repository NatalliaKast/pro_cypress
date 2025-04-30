## Follow the established naming conventions: [Naming convention](docs/naming-conventions.md)

## Test Independence:

    - Define all use cases to be covered, even if not yet implemented, to create live documentation.
    - Structure use cases properly within files and ensure they are connected (dependent). Use cases from different files should not overlap.
    - Test scenarios (files) should be independent of each other.
    - Include only one describe block per file.

## Provide Skipped Empty Context and it Blocks:

    Track test coverage by providing descriptions for non-automated use cases, marking them as skipped:
        it.skip('Should display an error when submitting invalid data', () => {
            // Not implemented yet
        });

## No Hard-Coded Values in Tests:

    Store all parameters that characterize the app (requirements, localization values, implementation details, selectors, etc.) in separate files and variables. Write tests that are easy to read and understand.

## Do Not Hide Selectors:

    Store selectors in the selectors.js file, grouped by pages and components. For example: cy.get(cartPage.continueShopping).click(); This makes it easy to find and update selectors when needed.

## Test Data Isolation:

    Keep test data isolated for each test file.

## Test Data Management:

    Store test data in dedicated files under the cypress/test-data/ directory, organized by feature or flow.

## Test Data Randomization:

    Generate random test data rather than using the same data across tests.

## External Resource Handling:

    When testing links to external resources:
        - Remove the target attribute to keep navigation in the same window.
        - Handle uncaught exceptions appropriately.
        - Return to the application using cy.go('back').
    Example:
        cy.get(selector).invoke('removeAttr', 'target');
        cy.on('uncaught:exception', () => false); // Prevent test failure

## Custom Commands:

    Create reusable custom commands for common operations.

## Track issues:

    Document issues in the GitHub issue tracker and mark affected code with comments:
        //TODO: link to the issue description
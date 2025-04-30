## Test file naming convention:

    - UI: 'page-name.component-name.test-type.cy.js'
    - API: 'module-name.submodule-name.test-type.cy.js'
    - E2E: 'flow-name.subflow-name.test-type.cy.js'

## Describe block title convention:

    - UI: 'PageName.ComponentName: Given 'preconditions''
    - API: 'ModuleName.SubmoduleName: Given 'preconditions''
    - E2E: 'FlowName.SubflowName: Given 'preconditions''

## Context block title convention:

    - UI: 'PageName.ComponentName.USER_ROLE: When 'condition''
    - API: 'ModuleName.SubmoduleName.Endpoint.CRUD: When 'condition''
    - E2E: 'FlowName.SubflowName.USER_ROLE: When 'condition''

## It block title convention:

    - UI: 'PageName.ComponentName.USER_ROLE: Then 'expected result''
    - API: 'ModuleName.SubmoduleName.Endpoint.CRUD: Then 'expected result''
    - E2E: 'FlowName.SubflowName.USER_ROLE: Then 'expected result''

## Cypress commands naming convention:

    - Group commands by endpoint or page: 'pageName/endpointName_'action''

## UI elements l10n keys naming convention:

    - Use a hierarchical structure to organize keys by page and component: 'pageName.componentName.element' or 'pageName.element'
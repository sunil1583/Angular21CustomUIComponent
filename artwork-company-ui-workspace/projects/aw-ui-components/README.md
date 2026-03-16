# AwUiComponents

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

# Steps for reation and use of reusable component using Angular library

Create a workspace without an application.
ng new artwork-company-ui-workspace --create-application=false
cd artwork-company-ui-workspace

Generate UI Library
ng generate library aw-ui-components

Create Components (Button, Card, Table)
cd artwork-company-ui-workspace/projects/aw-ui-components/src/lib
ng generate component button --project=aw-ui-components
ng generate component card --project=aw-ui-components
ng generate component table --project=aw-ui-components

projects/ui-components/src/lib/
button/
card/
table/

Build the Library, Output will be generated:
ng build aw-ui-components
artwork-company-ui-workspace % ng build aw-ui-components
artwork-company-ui-workspace % cd dist/aw-ui-components

Prepare for npm Publishing
npm login
npm publish

Create a New Angular Application
ng new artwork-app
Install UI Library and then use component from library
npm i aw-ui-components
npm install aw-ui-components@1.0.0

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build aw-ui-components
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/aw-ui-components
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

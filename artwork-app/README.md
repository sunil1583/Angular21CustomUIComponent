# ArtworkApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

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

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

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

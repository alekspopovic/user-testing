<!-- prettier-ignore-start -->
## Documentation

Documentation part of the assignment detailing test plan creation, test case design, automation strategy, bug reporting, and performance testing strategy can be found [here](Documentation.md).

## Install dependencies

Run: 
```bash
npm install
# or
yarn
```

## Test Code with Jest + Testing Library

Tests for the User Profile Page feature have been included in ``UserProfilePage.test.js`` file. Since no implementation was required the component was stubbed inside of the test file and its usage was simulated using mock data and functions. To run tests use: 

```bash
npm run test
# or
yarn run test
```

## Automation Strategy with Cypress

### Page and component

In order for the test to run properly I added a basic ``Posts`` component in ``\src\app\Posts.jsx``, with a simple UI that allow the user to create new posts and add comments to them. The component is being called in ``posts.jsx`` page located in the ``\pages`` folder.

To access the page and component in browser run ``npm run dev`` or ``yarn dev`` and navigate to ``http://localhost:3000/posts`` URL in your browser.

### Running Cypress script

The Cypress script has been included in ``\cypress\e2e\Posts.cy.js`` file. Before running the script make sure your app/server is running.

#### Terminal

To run the script in terminal use:

```bash
npm run cypress:run
# or
yarn cypress:run
```

#### Browser

To run the script in browser:

1. Run:

```bash
npm run cypress:open
# or
yarn cypress:open
```
2. Select ``E2E Testing``.
3. Select a browser.
4. Click ``Start E2E Testing in **selected browser**`` button.
5. Select ``E2E specs`` tab if it isn't already selected.
6. Select ``Posts.cy.js`` spec.
7. Wait for the test to resolve.

<!-- prettier-ignore-end -->

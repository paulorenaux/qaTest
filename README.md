# Setup

1. Install node version manager to install node and npm
<!-- https://nodejs.org/en/download/package-manager -->
2.  install cypress
<!-- https://www.cypress.io/install -->
3. Install typscript
<!-- https://docs.cypress.io/guides/tooling/typescript-support -->

## Execute test

To execute the test and view the test being executed, use either
```sh
npm run cypress open
```
or
```sh
npx cypress open
```
_Note: using `cypress open` will ask which testing type and browser should be used._ 

To execute the test without viewing the test execution (headless), use either
```sh
npm run cypress run
```
or
```sh
npx cypress run
```

### Tip: running the test multiple times
to ensure the random values won't cause any errors, use:
```sh
for i in {1..10}; do npx cypress run; done
```
# :us: About
QA Challenge (2024) for empresa Embarca.ai.  
E2E Test in cypress can be found under `cypress/`, the answer to how to test on mobile is in file `mobileTesting.md` (the text is in brazilian portuguese).

# :brazil: Sobre
Teste de QA (2024) para a empresa Embarca.ai.  
Os testes E2E em cypress podem ser encontrados em `cypress/`, a resposta para como testar em mobile pode ser encontrado em `mobileTesting.md`.

# Setup

1. Install node version manager to install node and npm
<!-- https://nodejs.org/en/download/package-manager -->
2.  install cypress with `npm install cypress`
<!-- https://www.cypress.io/install -->
3. other dependencies used:
- faker-br, install with `npm install faker-br`
- jquery, install with `npm install jquery`

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

## Not in scope of the statement
- testing with different viewscreens, since the UI changes slightly according to screen width
- performing log in after any other step
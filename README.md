# challenge-node-js

This is a challenge to practice Node.js

# Available Commands

## start application

`$ npm start` to start application without watching file changes.

## Run in dev mode

`$ npm run dev` to start application watching file changes.

## run tests

`$ npm run test` to run unit tests.

## run tests in watching mode

`$ npm run test:watch` to run unit tests in watching mode.

# Available Routes

## To check eligibility

```
REQUEST
POST /check/eligibility
BODY {
  numeroDoDocumento: string
  tipoDeConexao: string
  classeDeConsumo: string
  modalidadeTarifaria: string
  historicoDeConsumo: number[]
}

RESPONSES

# if it's eligible
STATUS 200
BODY {
	elegivel: true,
	economiaAnualDeCO2: number
}

# if it's not eligible
STATUS 200
BODY {
	elegivel: false,
	razoesDeInelegibilidade: string[]
}
```

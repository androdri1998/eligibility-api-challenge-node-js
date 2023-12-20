# eligibility-api-challenge-node-js

This is a challenge to practice Node.js

# Setup application

## Create .env file

Create a .env file using .env.example as a draft

```
PORT=[AVAILABLE PORT]
HOST=[AVAILABLE HOST]
MOCK_DOCUMENT=[MOCK_DOCUMENT(CPF OR CNPJ FORMAT EXAMPLE 00000000000) TO BE USED ON TESTS]
```

## Install application dependencies

run `$ npm intall` to install dependecies.

## run application

run `$ npm start` to run application.

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

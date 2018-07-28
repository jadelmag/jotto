## Jotto

Jotto is an small project using TDD, Unit Testing using Jest and Enzyme.
This application test components, actions, reducers, props, state, etc..

### Instalation

1. write in console: `npm install` to create `package-lock.json` file.
2. write in console: `yarn install` to create `yarn.lock` file.

If npm test throws errors:
- Remove yarn.lock, package-lock.json and node_modules folder.
- Install modules using: `npm install` y `yarn install`.
- Run tests with: `yarn test --watchAll`

--watch is not supported without git/hg, please use --watchAll

### Requirements

- create-react-app 1.5.2
- node 9.10.0
- npm 6.2.0
- react 16.4.1
- jest 23.4.1
- jest-enzyme 6.0.2
- enzyme 3.3.0
- enzyme-adapter-react-16 1.1.1
- redux 4.0.0
- react-redux 5.0.7
- redux-thunk 2.3.0
- axios 0.18.0
- moxios 0.4.0

### DOCUMENTATION
Jest: https://jestjs.io/docs/en/getting-started
Enzyme: http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html

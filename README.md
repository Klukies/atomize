# Team Spacebar Next Boilerplate

The boilerplate used by Team Spacebar to create Next.js applications

## Introduction

This project contains everything needed to start developing a Next.js
application with [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

- [Node.JS](https://nodejs.org/en/)
- [pre-commit](https://pre-commit.com/)

It is important to note that a postinstall script will run after the
installation process in order to install the pre-commit hook. If you
(the developer) do not have this installed, it will try to install pre-commit
using [brew](https://brew.sh/).

For windows devices, this can be installed using [Conda](https://docs.conda.io/en/latest/).
If a developer makes use of this, please be so kind to update the
[postinstall-local.sh](scripts/postinstall-local.sh) script 😊.

### Installation proces

- Clone this repository
- Run `npm install` to install the required dependencies
- Run `npm run dev` to get a working example at localhost:3000

## Building and Testing

### Testing the application

In order to test both the server and the client, this boilerplate makes use of
[Jest](https://jestjs.io/) and [Cypress](https://docs.cypress.io) to test the
application. To make it easier for developers however, all tests reside within
the `__tests__` folder.

#### Unit Tests

Jest is used (with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/))
to test the React components that are consumed by Next and test the api routes
that are available by Next. To run these tests you can use the following
commands:

```console
npm run test

npm run test:coverage
```

#### End-to-End Tests

Cypress is used to test the pages that are generated with Next. This allows us
To run the server completely and get a better view of how the user would
interact with the application. To run the tests you can use the following
commands (coverage is gathered automatically):

```console
# Run the tests from the terminal
npm run cy:run

# Open a GUI that allows you to run the tests
npm run cy:open
```

After the tests have run, you can view a video of each test in the
`cypress/videos` folder.

### Building the application

In order to get a production ready build, you can run the following command:

```console
npm run build
```

## Contributing

### Branching

In order to contribute to this project, clone the project and create a new
branch. The name of the branch doesn't matter much as we follow fast-forward
merging.

### Commits

Try to keep commits as contained as possible. In order for your commit message
to pass with commitlint make sure to adhere
[the conventional commit standard](https://www.conventionalcommits.org/en/v1.0.0/).

### Merge Requests

When you're finished with your changes, you can create a PR following [these standards](https://confluence.itpservices.be/pages/viewpage.action?pageId=16714118).

**Make sure to follow the coding standards provided with ESLint, Prettier and MarkdownLint!**

### Releasing a new version

As we are making use of conventional commits, it is important to release a new
version each time a change is made to this repository. This allows for a clean
overview of what has changed over time.

To release a new version run
`npm run release -- --release-as {patch|minor|major}` to release a new version.

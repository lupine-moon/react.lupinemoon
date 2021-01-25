# react.lupinemoon

This is the source code for [Lupine Moon](https://www.lupinemoon.co.za) website, built using React, Typescript, MobX, Ant Design, and Webpack. We leverage [Create React App Configuration Override](https://github.com/sharegate/craco) in order to provide custom build functionality.

## Getting Started

To get started clone the repository and run:

```bash
yarn install
```

Followed by:

```bash
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker

This project includes a multi-stage Dockerfile.

To build the image:

```bash
docker build . --tag react.lupinemoon:1.0
```

Alternatively, build and run:

```bash
docker-compose up --build
```

Or, just run the existing image:

```bash
docker-compose up
```

Runs the app in production mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Contribution Guidelines

Code reviews are done via pull requests.

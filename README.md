# Using SAGE2 Webview Container with React

The [SAGE2 Webview Container](https://bitbucket.org/sage2/sage2/wiki/SAGE2%20Webview%20Container) lets you hook into SAGE2 App state while developing an app just as you would develop a normal webpage. For general information, view the guide in the link above.

## Developing Your App

This repository provides an example of how to do create an app using the SAGE2 Webview Container and React. There are a few main things to note to ensure that your React app works with SAGE2.

1. Add the `"homepage": "."` field to your package.json file to make sure resource paths are correctly prefixed
2. Include the `SAGE2_AppState.js` file found in this repository and load it using `require("./SAGE2_AppState.js")` within your application entrypoint
3. Include the `useSAGE2AppState.js` file found in this repoository and wrap your application in the `SAGE2App` component (exported from `useSAGE2AppState.js`)
4. Set the initial state values on the `SAGE2App` component using the `initialState` prop (as seen in src/App.js)
5. **Read** your entire App state using the `useSAGE2AppState` hook (exported from `useSAGE2AppState.js`)
6. **Read and write** your entire App state using the `useSAGE2AppStateValue` hook (exported from `useSAGE2AppState.js`)

## Moving Your App Into SAGE2

1. Download the [skeletonWebviewApp template](https://bitbucket.org/sage2/sage2_apps/src/master/javascript/skeletonWebviewApp/) and follow the instructions in the section titled **_Step by step on how to use the container for your own application_**
2. Add any state values you declared in the `initialState` prop to the `load` section of `skeletonWebviewApp/instructions.json`
3. Build your React app (using `npm run build`) and copy the contents of the `build` folder into the `webpage` folder of the skeletonWebviewApp

# Create React App default README below vvv

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

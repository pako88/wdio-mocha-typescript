# wdio-mocha-typescript
## Features
- WDIO 6
- Mocha
- TypeScript
- Typed Config
- ESLint
- VSCode Integration
- Multiple Configurations (Devtools, Chromedriver, Sauce Labs)
- Cross Platform Example Tests
- Page Object Model

## Requirements
- Node version 8 or higher
- (for local execution) Latest Chrome Stable
- (for cloud execution) Sauce Labs Account

## Quick Start
- clone the git repo: `git clone https://github.com/pako88/wdio-mocha-typescript.git`
- install the dependencies: `npm install`
- (for cloud execution) set the following environment variables with your sauce labs credentials
    - SAUCE_USERNAME
    - SAUCE_ACCESS_KEY

## Run the Tests
You can either run the tests with the integrated Visual Studio Code Debug Scripts, or you can run them with one of the following terminal commands.
### Local Chromedriver Execution
`npm run test:chromedriver`
### Local Chrome Devtools Execution
`npm run test:devtools`
### Cloud Execution with Sauce Labs
`npm run test:sauce`

## Technical Details
### TypeScript Transpilation
TypeScript is transpiled on the fly with ts-node, you don't have to execute the tsc command.  
To enable this feature and to have typed configurations, js-wrappers are implemented for each configuration.  
Take a look in the config folder for the technical implementation.

## Known Limitations and Issues
### VSCode
If you want to debug your tests with breakpoints in VSCode, you have to install the [nightly version of the JavaScript Debugger](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly)

### Tests
- actions.ts doesn't work with devtools yet
- actions.ts doesn't work with safari and ie
- The uploadFile command is not available in msedge

## Metrics and Test Results
[![Sauce Test Status](https://app.eu-central-1.saucelabs.com/browser-matrix/wdio-mocha-typescript.svg)](https://app.eu-central-1.saucelabs.com/u/wdio-mocha-typescript)

![Testing Powered By SauceLabs](https://raw.githubusercontent.com/saucelabs/opensource/master/assets/powered-by-saucelabs-badge-red.svg?sanitize=true "Testing Powered By SauceLabs")
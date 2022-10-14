# The Swop Website
## Version 0.6.1

This is the main website for The Swop built in react-js wrapped up for deployment to a canister using dfx.

## Get Started:

### Dependencies:

* Node-JS + NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* DFX 0.11.2: https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/

First Clone:

Note: During the first setup dfx must generate the vite config during it's build process. You should only have to do this once for setup.

```
npm install
dfx start --clean --background
dfx deploy
dfx stop
```

Start in dev mode:

```
npm run dev
```

Build to dist:

```
npm run build
```

Test Before Deploy:
```
npm run serve
```

Deployment to mainnet:

```
dfx deploy --network ic
```

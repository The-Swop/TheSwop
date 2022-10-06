# The Swop Website
## Version 1.0.0

This is the main website for The Swop built in react-js wrapped up for deployment to a canister using dfx.

## Get Started:

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

Deployment to mainnet:

```
dfx deploy --network ic
```

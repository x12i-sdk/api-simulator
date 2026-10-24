# @x12i/api-simulator-docs usage example

api-simulator docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `0.1.5`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/api-simulator-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled api-simulator documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/api-simulator-docs)
- [Implementation monorepo](https://github.com/x12i/api-simulator)
- [Reviewed package source](https://github.com/x12i/api-simulator/tree/48dfd8f1cd7ad51d1aac21a633b1470f0f762efb/packages/api-simulator-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/api-simulator runtime example

Transport-agnostic framework for fixed, relative-template, and function-based API simulations.

Dispatch fixed and computed local API responses. This example consumes `@x12i/api-simulator@1.3.0`.

```sh
npm install --ignore-scripts
npm run example:api-simulator
```

Source: [`src/api-simulator-example.mjs`](src/api-simulator-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.

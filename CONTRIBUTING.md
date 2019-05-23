# How to contribute

Thank you for reading this!

`eslint-config-smarthr` is intended to be used for SmartHR internally, but we are welcoming your contributions!

## Setup

We use `yarn` for the package manager.

```sh
$ yarn
```

## Test

```sh
$ yarn test
```

`eslint-config-smarthr` uses Jest's snapshot testing to verify the lint results so tests might be failed due to mismatch the lint results.

If the lint results are what you expect, you can update the snapshot with the following command.

```sh
$ yarn test:update-snapshot
```

## Release

```sh
$ npm run release
```

We use `np` to release npm packages.
`np` doesn't work well through `yarn run` command, so we have to use `npm-scripts` to run `release` script into `npm-scripts`.

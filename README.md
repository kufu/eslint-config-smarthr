# eslint-config-smarthr

[![npm version](https://badge.fury.io/js/eslint-config-smarthr.svg)](https://badge.fury.io/js/eslint-config-smarthr)
[![CircleCI](https://circleci.com/gh/kufu/eslint-config-smarthr.svg?style=shield)](https://circleci.com/gh/kufu/eslint-config-smarthr)


A sharable ESLint config for SmartHR.
This is intended to use at a project for React + TypeScript.

## Install

```sh
yarn add --dev eslint typescript react // install peerDependencies
yarn add --dev eslint-config-smarthr
```

## How to use

Add a following `eslint.config.js` in your project.

```js
import smarthr from 'eslint-config-smarthr'

export default [
  ...smarthr,
  {
    // your project's configuration
  },
]
```

Run `eslint`!

```sh
yarn eslint src
```

If you want to lint TypeScript files including `.tsx`, you can use `--ext` option ESLint has.

```sh
yarn eslint --ext .ts,.tsx src
```

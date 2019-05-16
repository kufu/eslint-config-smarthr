# eslint-config-smarthr

[![npm version](https://badge.fury.io/js/%40kufu%2Feslint-config-smarthr.svg)](https://badge.fury.io/js/%40kufuf%2Feslint-config-smarthr)
[![CircleCI](https://circleci.com/gh/kufu/eslint-config-smarthr.svg?style=shield)](https://circleci.com/gh/kufu/eslint-config-smarthr)


A sharable ESLint config for SmartHR.
This is intended to use at a project for React + TypeScript + Prettier.

## Install

```sh
yarn add --dev eslint prettier typescript react // install peerDependencies
yarn add --dev eslint-config-smarthr
```

## How to use

Add a following `.eslintrc.js` in your project.

```js
module.exports = {
    extends: 'smarthr'
}
```

Run `eslint`!

```sh
yarn eslint src
```

If you want to lint TypeScript files including `.tsx`, you can use `--ext` option ESLint has.

```sh
yarn eslint --ext .ts,.tsx src
```

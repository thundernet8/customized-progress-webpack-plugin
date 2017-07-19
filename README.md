<div align="center">

# customized-progress-webpack-plugin

**A simple progress plugin for Webpack, fork and customize of simple-progress-webpack-plugin.**

[![npm version](https://img.shields.io/npm/v/simple-progress-webpack-plugin.svg?maxAge=3600&style=flat)](https://www.npmjs.com/package/customized-progress-webpack-plugin)
[![dependency status](https://img.shields.io/david/thundernet8/customized-progress-webpack-plugin.svg?maxAge=3600&style=flat)](https://david-dm.org/thundernet8/customized-progress-webpack-plugin)
[![dev dependency status](https://img.shields.io/david/dev/thundernet8/customized-progress-webpack-plugin.svg?maxAge=3600&style=flat)](https://david-dm.org/thundernet8/customized-progress-webpack-plugin?type=dev)
[![travis ci build status](https://img.shields.io/travis/thundernet8/customized-progress-webpack-plugin/master.svg?maxAge=3600&style=flat)](https://travis-ci.org/thundernet8/customized-progress-webpack-plugin)
[![Known Vulnerabilities](https://snyk.io/test/github/thundernet8/customized-progress-webpack-plugin/badge.svg)](https://snyk.io/test/github/thundernet8/customized-progress-webpack-plugin)
[![license](https://img.shields.io/npm/l/customized-progress-webpack-plugin.svg?maxAge=3600&style=flat)](https://github.com/thundernet8/customized-progress-webpack-plugin/LICENSE)

</div>

<br>

## Install

``` bash
npm install customized-progress-webpack-plugin --save-dev
```

OR

```
yarn add customized-progress-webpack-plugin --dev
```

<br>

## How to use

First, import the plugin into your Webpack configuration file:

``` javascript
const SimpleProgressWebpackPlugin = require( 'customized-progress-webpack-plugin' );
```

Then, instantiate it within the list of plugins:

``` javascript
plugins: [
  new SimpleProgressWebpackPlugin()
]
```

<br>

## Preview

![Compact Logger Preview GIF](/compact-logger-preview.gif?raw=true)

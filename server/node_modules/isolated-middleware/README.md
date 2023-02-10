# isolated
A Connect/Express middleware for Enabling cross-origin-isolation.

**If you want to user isolated on koa app, use [koa-isolated](https://www.npmjs.com/package/koa-isolated).**

> Cross-origin isolation enables a web page to use powerful features such as
SharedArrayBuffer. This article explains how to enable cross-origin
isolation on your website.

The isolation need to set the header for [Cross-Origin-Opener-Policy(CROP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) and [Cross-Origin-Embedder-Policy(COEP)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy).

If you want to use `SharedArrayBuffer`, `performance.measureUserAgentSpecificMemory()` or high resolution timer with better precision, you should enable cross-origin isolation.

## Installation

use npm

```shell
npm install isolated-middleware
```

or use yarn

```shell
yarn add isolated-middleware
```

## Quick start

### Express

```javascript
const express = require('express');
const isolated = require('isolated-middleware');

const app = express();
app.use(isolated());
```

### Connect

```javascript
const connect = require('connect');
const isolated = require('isolated-middleware');

const app = connect();
app.use(isolated());
```

## License
[MIT](https://github.com/fx109138/isolated/blob/main/LICENSE)

# bug

[![Travis build status](http://img.shields.io/travis/gajus/bug/master.svg?style=flat-square)](https://travis-ci.org/gajus/bug)
[![Coveralls](https://img.shields.io/coveralls/gajus/bug.svg?style=flat-square)](https://coveralls.io/github/gajus/bug)
[![NPM version](http://img.shields.io/npm/v/bug.svg?style=flat-square)](https://www.npmjs.org/package/bug)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Bug Node.js code.

## Disclaimer

This is just an experiment.

In 99.99% of the use cases, you want the native [Node.js debugger](https://nodejs.org/api/debugger.html).

## Example usage

```js
import bug from 'bug';

console.log('a', Date.now());

bug();

console.log('b', Date.now());

bug();

console.log('c', Date.now());

```

In the above example, event cycle does not advance past `bug` invocation until "c" key is pressed.

```js
a 1551014945604
Press "c" key to continue execution.
b 1551014947020
Press "c" key to continue execution.
c 1551014949337

```

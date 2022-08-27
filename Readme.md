
  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).
 
```js
const newday = require('newday')
const app = newday()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install newday
```

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

  ## Docs & Community

  * [Website and Documentation](https://puzzleartcollection.website/) - [[website repo](https://github.com/LifeCoachRay/newday)]
  * [GitHub Organization](https://github.com/LifeCoachRay/newday/tree/main/lib/middleware) for Official Middleware & Modules
  * [E-Mail](support@mypockettokenfoundation.org) for support and questions.


### Security Issues

If you discover a security vulnerability in newday, please see [Security Policies and Procedures](Security.md).

## Quick Start

  The quickest way to get started with newday is to create your own app:

```bash
$ newday /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:3000

## Philosophy

  The newday philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Newday does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/tj/consolidate.js),
  you can quickly craft your perfect framework.


## Contributing

[Contributing Guide](Contributing.md)

## People

The original author of newday is [TJ Holowaychuk](https://github.com/tj)

The current lead maintainer is [Douglas Christopher Wilson](https://github.com/dougwilson)


## License

  [MIT](LICENSE)


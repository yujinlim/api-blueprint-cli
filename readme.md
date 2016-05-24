# API Blueprint generator [![Build Status](https://travis-ci.org/yujinlim/api-blueprint-cli.svg?branch=master)](https://travis-ci.org/yujinlim/api-blueprint-cli)
> This is a cli that extract comment on file for [API Blueprint](https://apiblueprint.org)

A common use case is to auto generate API documentation and upload to [Apiary](https://apiary.io).

## Installation
``` bash
npm i -g api-blueprint-cli
```

## Usage
``` bash
blueprint --help
# A API blueprint generator from comment
#
# Usage:
# 	$ blueprint <file_path>
#
# Options:
# 	-j, --json Print as JSON API Element
#
# Examples:
# 	$ blueprint index.js

blueprint routes.js
# FORMAT: 1A
# # My API
# Api
# # Group questions
# Questions related API Points
# ## Question Collection [/questions]
```

## Example
```JS
// routes.js
'use strict';
// FORMAT: 1A
// # My API
// Api

const app = require('koa')();
const router = require('koa-router')();

// # Group questions
// Questions related API Points
// ## Question Collection [/questions]
router.get('/questions', question.get);
```

## Related
- [Apiary](https://apiary.io)
- [API Blueprint](https://apiblueprint.org)

## License
MIT © [Yu Jin Lim](https://github.com/yujinlim)

#!/usr/bin/env node
'use strict';

const meow = require('meow');
const blueprint = require('./');

const cli = meow(`
	Usage:
		$ blueprint <file_path>

	Options:
		-j, --json Print as JSON API Element

	Examples:
		$ blueprint index.js
`, {
	alias: {
		j: 'json'
	}
});

let apiDocs = blueprint(cli.input[0], cli.flags.json);
if (cli.flags.json) {
	apiDocs = JSON.stringify(apiDocs);
}
console.log(apiDocs);

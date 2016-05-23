'use strict';

const fs = require('fs');
const assert = require('assert');
const extract = require('extract-comments');
const protagonist = require('protagonist');

module.exports = parseBluePrint;

function parseBluePrint(file, json) {
	assert(file, 'Required file path');
	let bluePrintComment = '';

	const data = fs.readFileSync(file, {
		encoding: 'utf-8'
	});
	const comments = extract(data);
	comments.forEach((comment) => {
		bluePrintComment = bluePrintComment.concat(comment.value, '\n');
	});

	if (json) {
		return protagonist.parseSync(bluePrintComment);
	}

	return bluePrintComment;
}

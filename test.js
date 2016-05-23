'use strict';

import test from 'ava';
import blueprint from './';

test('should throw error', t => {
	t.throws(blueprint, /Required file path/g, 'Should throw an error if path is not available');
});

test('should be able to parse and return API blueprint in string', t => {
	const fixturePath = 'fixtures/routes.js';
	const expectedString = `FORMAT: 1A\n# My API\nApi\n# Group questions\nQuestions related API Points\n## Question Collection [/questions]\n`;
	const blueprintString = blueprint(fixturePath);
	t.deepEqual(blueprintString, expectedString);
});


const test = require('node:test');
const assert = require('node:assert/strict');

const add = require('./assignment.js');

test('Test 1: Add positive numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('Test 2: Add negative and positive numbers', () => {
  assert.equal(add(-2, 2), 0);
});

test('Test 3: Add larger numbers', () => {
  assert.equal(add(10, 15), 25);
});

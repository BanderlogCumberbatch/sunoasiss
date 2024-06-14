// test.js (или __tests__/test.js)
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); 
}); 

test('adds 5 + 3 to equal 8', () => {
  expect(sum(5, 3)).toBe(8);
}); 

test('adds -1 + 4 to equal 3', () => {
  expect(sum(-1, 4)).toBe(3);
});
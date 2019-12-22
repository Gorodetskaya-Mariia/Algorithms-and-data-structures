const sum = require('./index');

test('sum function exists', () => {
  expect(typeof sum).toEqual('function');
});

test('sum of params is done', () => {
	expect(sum(1,2,3)).toEqual(6);
	expect(sum(1,2,3,4,5)).toEqual(15);
	expect(sum(1,2,3,4,5,6,7)).toEqual(28);
});

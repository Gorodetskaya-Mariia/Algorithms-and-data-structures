const queueTime = require('./index');

test('queueTime function is defined', () => {
  expect(typeof queueTime).toEqual('function');
});

test('tests', () => {
	expect(queueTime([], 1)).toEqual(0);
	expect(queueTime([1,2,3,4], 1)).toEqual(10);
	expect(queueTime([2,2,3,3,4,], 2)).toEqual(9);
	expect(queueTime([1,2,3,4,5], 100)).toEqual(5);
});
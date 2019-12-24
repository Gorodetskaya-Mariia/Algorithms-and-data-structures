const listNames = require('./index');

test('list function is defined', () => {
  expect(typeof listNames).toEqual('function');
});

test('Must work with many names', () => {
  expect(listNames([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])).toEqual('Bart, Lisa, Maggie, Homer & Marge');
});

test('Must work with two names', () => {
	expect(listNames([{name: 'Bart'},{name: 'Lisa'}])).toEqual('Bart & Lisa');
});

test('Must work with one name', () => {
	expect(listNames([{name: 'Bart'},{name: 'Lisa'}])).toEqual('Bart & Lisa');
});

test('Must work with no name', () => {
	expect(listNames([])).toEqual('');
});

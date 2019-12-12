const convertObj = require('./index');
const initial = [
	{
    id: 1,
    message: "Hello"
  },
  {
    id: 2,
    message: "world"
  },
  {
    id: 3,
    message: "map"
  },
  {
    id: 1,
    message: "!"
  },
  {
    id: 3,
    message: "reduce"
  }
];

const result = {
	id1: ["Hello", "!"],
	id2: ["world"],
	id3: ["map", "reduce"]
}

test('convertObj function exists', () => {
  expect(typeof convertObj).toEqual('function');
});

test('converting of object is done', () => {
  expect(convertObj(initial)).toEqual(result);
});

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const result = n.toString().split("").reverse().join("");
	return parseInt(result) * Math.sign(n);
}
//I can not use Number(val) instead of parseInt(val) due to parseInt ignores "-" at the end of string and return just a number
//Math.sign(20) == 1, Math.sign(-20) == -1
module.exports = reverseInt;

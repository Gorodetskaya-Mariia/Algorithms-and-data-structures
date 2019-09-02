// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let splittedString = str.split("");
	let reversedString = [];
	for (let i=splittedString.length-1; i >= 0; i--){
		reversedString.push(splittedString[i]);
	}
	let result = reversedString.join("")
	return result;
}
//
function reverse1(str) {
	return str.split("").reverse().join("");
}

function reverse2(str) {
	return str.split("").reduce((rev, char) => char + rev,"");
}

reverse2("Greetings!");
module.exports = reverse;

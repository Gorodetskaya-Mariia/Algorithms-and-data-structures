// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//1
function vowels(str) {
	let count = 0;
	str.toLowerCase().split("").forEach(char => {
		char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ? count++ : count;
	});
	return count
}

//2
function vowels(str) {
	return str.toLowerCase().replace(/[^a,e,i,o,u]/gi,"").length;
}

//3
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

//4
function vowels(str) {
	const array = ["a","e","i","o","u"];
	let count = 0;
	str.toLowerCase().split("").forEach((char)=>{
		array.includes(char) ? count++ : count;
	});
	return count;
}
module.exports = vowels;

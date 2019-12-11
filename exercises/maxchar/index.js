// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let obj = {};

	for(let char of str){
		if (obj[char]){
			obj[char]++;
		} else {
			obj[char] = 1;
		}
	}
	const max = Math.max(...Object.values(obj));
	for(let key in obj){
		if(obj[key] == max)
		return key;
	}
}

module.exports = maxChar;

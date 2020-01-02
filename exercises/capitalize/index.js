// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	return str.split(" ").map(word =>{
		return word.split("").reduce((newWord, item, index)=>{
			return index === 0 ? newWord + item.toUpperCase() : newWord + item; 
		},"")
	}).join(" ");	
}

//the second mode
function capitalize(str) {
	return str.split(" ").map(word =>{
		return word[0].toUpperCase() + word.slice(1);
	}).join(" ");	
}

//the third mode
function capitalize(str) {
	return str.split("").reduce((newStr, char, index, str) =>{
		if(index === 0){
			return char.toUpperCase();
		}
		return str[index -1] === " " ? newStr + char.toUpperCase() : newStr + char;
	},"");	
}

module.exports = capitalize;

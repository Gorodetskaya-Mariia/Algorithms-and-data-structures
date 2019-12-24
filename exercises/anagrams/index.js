// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
	return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");
}
//second mode
// function anagrams(stringA, stringB) {
// 	const objA = buildObj(stringA);
// 	const objB = buildObj(stringB);

// 	if(Object.keys(objA).length !== Object.keys(objB).length){
// 		return false;
// 	}

// 	for(let char in objA){
// 		if(objA[char] !== objB[char]){
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function buildObj(str){
// 	let newObj = {};
// 	for(let char of str.replace(/[^\w]/g).toLowerCase()){
// 		newObj[char] = newObj[char] + 1 || 1;
// 	}

// 	return newObj;
// }

module.exports = anagrams;


//from Yandex, write a function getAnagrams(“нос”, “сон”, “снедь”, “днесь”)
//the result should be 
// [
//   ["нос", "сон"],
//   ["днесь", "снедь"]
// ]

// function getAnagrams(...array){
// 	let result = [];
// 	array.forEach((item, index) => {
// 		let newArray =[];
// 		for(let i=index; i < array.length; i++){
// 			if(cleanString(item) === cleanString(array[i])){
// 				newArray.push(array[i])
// 			}
// 		}
// 		if(newArray.length > 1) result.push(newArray);
// 	});
// 	return result;
// }

// function cleanString(str){
// 	return str.split("").sort().join("");
// }

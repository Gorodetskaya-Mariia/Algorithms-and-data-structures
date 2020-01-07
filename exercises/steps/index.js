// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let level = 1;
	while(level <= n){
		let str = Array(n).fill(" ");
		for(let i=0; i < level; i++){
			str[i] = "#"
		}
		console.log(str.join(""));
		level++;
	}
}

//second mode
function steps(n) {
	for(let row = 1; row <= n; row++){
		let str = "";
		for(let columns = 0; columns < n; columns++){
			if(columns < row){
				str+= "#"
			} else {
				str+= " "
			}
		}
		console.log(str);
	}
}

//third mode using recursion
function steps(n, row = 0, str = "") {
	if(n === row)return;

	if(n === str.length){
		console.log(str);
		return steps(n, row + 1);
	}

	if(str.length <= row){
		str+= "#"
	} else {
		str+= " "
	}
	steps(n, row, str);
}

module.exports = steps;

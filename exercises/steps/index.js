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

function Calculator(){
	this.read = function(){
		this.a = +prompt("Enter first number");
		this.b = +prompt("Enter second number");
	}

	this.sum = function(){
		return this.a + this.b;
	}

	this.mul = function(){
		return this.a*this.b;
	}
}

calculator = new Calculator();
calculator.read();

function Accumulator(startingValue){
	this.value = startingValue;

	this.read = function(){
		this.newValue = +prompt("Enter new value",0);
		this.value+= this.newValue;
	}
}

function sumSalaries(array){
	let sum = 0;
	let arr = Object.values(array);
	if(array.length){
		for(let value of arr){
			sum+= arr[value];
		}
	}
	return sum;
}

function count(obj){
	return Object.keys(obj).length;
}

function topSalary(salaries){
	let userName = null;
	let max = 0;
	for(let [name, value] of Object.entries(salaries)){
		if(value > max){
			max = value;
			userName = name;
		}
	}
	return userName;
}

function alclean(arr){
	return arr.map(item => {
		let el = item.toLowerCase().split("").sort().join("");
		arr.filter(i=>{
			item === i.toLowerCase().split("").sort().join("")
		})
	});
}
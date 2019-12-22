function sum(...args){
	return args.reduce((sum,number)=>{return sum + number},0);
}

module.exports = sum;
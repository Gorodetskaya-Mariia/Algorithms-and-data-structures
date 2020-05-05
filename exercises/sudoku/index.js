//Is an input array sudoku(9x9)?

function validSolution(board) {
	let r = [], s = [], t = [];
	for (let i = 0; i < board.length; i++) {
		Array.prototype.push.apply(r, board[i].slice(0, 3)); console.log(r);
		Array.prototype.push.apply(s, board[i].slice(3, 6)); console.log(s);
		Array.prototype.push.apply(t, board[i].slice(6, 9)); console.log(t);
		if (i == 2 || i == 5 || i == 8) {
			if (sum(r) !== 45) {
				return false;
			}
			r = []; s = []; t = [];
		}
	}
	return true;
}

function sum(array) {
	return array.reduce((sum, el) => sum + el);
}

validSolution([
	[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]]) => true
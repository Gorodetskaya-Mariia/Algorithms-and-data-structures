// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let matrix = [];
	let counter = 1;
	for(let i = 0; i < n; i++){
		matrix.push([]);
	}
	let startRow = 0,
			endRow = n -1,
			startColumn = 0,
			endColumn = n - 1;
	
	while(startRow <= endRow && startColumn <= endColumn){
		//top row
		for(let i = startColumn; i <= endColumn; i++){
			matrix[startRow][i] = counter;
			counter++;
		}
		startRow++;
		//right column
		for(let i = startRow; i <= endRow; i++){
			matrix[i][endColumn] = counter;
			counter++;
		}
		//bottom row
		endColumn--;
		for(let i = endColumn; i >= startColumn; i--){
			matrix[endRow][i] = counter;
			counter++;
		}
		endRow--;
		//start column
		for(let i = endRow; i >= startRow; i--){
			matrix[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}	
	return matrix;
}

module.exports = matrix;

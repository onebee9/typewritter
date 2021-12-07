const transpose = function (matrix) {
  let newLayout = [];
  const numOriginalRows = matrix.length;
  const numOriginalCols = matrix[0].length;

  for(let i = 0; i < numOriginalCols; i++){
    newLayout.push([]);
  }
console.log('blank new matrix', newLayout); 
  for (let i = 0; i < numOriginalRows; i++) {
    for (let j = 0; j < numOriginalCols; j++) {
      newLayout[j][i] = matrix[i][j]; // puts the values from the original column into each array[element[item]] of the new row
    }
    
  }
  return newLayout;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

const matrix = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
];
printMatrix(transpose(matrix));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
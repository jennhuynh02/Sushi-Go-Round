
function deepCopy(array) {
  const scrambledPositions = [];
  array.forEach((arr) => {
    let mini = [];
    mini.push(arr[0]);
    mini.push(arr[1]);
    scrambledPositions.push(mini);
  });
  array.splice(2);
  array[0][0] = 9;
}

let array1 = [[0, 0], [1, 1], [2, 2], [3, 3]];
let array2 = [[4, 1], [5, 1], [6, 1], [7, 1]];
deepCopy(array1);
deepCopy(array2);

// this works

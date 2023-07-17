function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

let myArray = [3, 1, 4, 2];
let sortedArray = sortArray(myArray);
console.log(sortedArray); 

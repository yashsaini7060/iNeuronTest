function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

let myArray = [3, 1, 4, 2];
let sortedArray = sortArray(myArray);
console.log(sortedArray); 


function processArray(arr) {
  let result = arr
    .filter(num => num % 2 === 0)   // Remove odd numbers
    .map(num => num * 2);           // Multiply remaining by 2
  let sum = result.reduce((acc, val) => acc + val, 0); // Sum
  console.log("Processed Array: " + result);
  console.log("Sum: " + sum);
}
processArray([1, 2, 3, 4, 5, 6]);

let numbers = [23, 5, 89, 12, 45];
let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);
console.log("Largest: " + largest);
console.log("Smallest: " + smallest);
let ascending = [...numbers].sort((a, b) => a - b);
let descending = [...numbers].sort((a, b) => b - a);
console.log("Ascending: " + ascending);
console.log("Descending: " + descending);

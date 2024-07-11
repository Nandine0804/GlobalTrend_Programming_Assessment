function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage
let array = [1, 2, 3, 4, 3, 2, 1, 5];
console.log(removeDuplicates(array)); 

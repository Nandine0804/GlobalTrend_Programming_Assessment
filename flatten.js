function flattenArray(nestedArray) {
  let stack = [...nestedArray];
  let flattened = [];

  while (stack.length) {
    let element = stack.pop();

    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened.reverse();
}

let nestedArray = [18, [29, [3, 74], 5], [6, 87], 8];
console.log(flattenArray(nestedArray)); 

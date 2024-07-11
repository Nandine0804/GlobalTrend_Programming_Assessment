function capitalizeFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let sentence = "hello world! this is a test.";
console.log(capitalizeFirstLetters(sentence));

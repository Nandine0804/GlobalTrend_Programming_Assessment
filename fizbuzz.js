const prompt = require("prompt-sync")({ sigint: true });
let number = prompt("Enter a no between 1 and 100:");
for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log(i, "Fizz");
    }
    else if (i % 5 == 0) {
      console.log(i, "Buzz");
    }
  
}

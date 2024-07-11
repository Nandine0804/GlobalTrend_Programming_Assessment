const prompt = require("prompt-sync")({ sigint: true });
function evaluateExpression(expression) {
  expression = expression.replace(/\s+/g, "");
  let tokens = expression.split(/([+-])/);
  let result = 0;
  let currentNumber = 0;
  let currentOperator = "+";
  for (let token of tokens) {
    if (token === "+" || token === "-") {
      currentOperator = token;
    } else {
      currentNumber = parseInt(token, 10);

    
      if (currentOperator === "+") {
        result += currentNumber;
      } else {
        result -= currentNumber;
      }
    }
  }

  return result;
}

let expression = prompt("Enter the exp with only (sub & add) :");
console.log(evaluateExpression(expression)); 

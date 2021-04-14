type TOperator = "add" | "subtract" | "multiply" | "divide" | "remainder";

function calculate(operator: TOperator, a: number, b: number): number {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  } else if (operator === "remainder") {
    return a % b;
  } else {
    throw new Error("Operator not permitted.");
  }
}
/**
 * Let's make a calculator 🧮
 */
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

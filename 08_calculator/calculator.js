const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for (let number of numbers) {
    product *= number;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a > 0) {
    let b = factorial(a - 1);
    return a * b;
  }
  return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

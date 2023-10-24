const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(args) {
  var sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const multiply = function(args) {
  var result = (args.length >= 1) ? 1 : 0;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;
  return num * factorial(num - 1);
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

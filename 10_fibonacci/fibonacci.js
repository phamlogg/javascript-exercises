const fibonacci = function(num) {
  if (num < 0) return "OOPS"
  let fibo = [];
  let first = 1, 
      second = 1, 
      third;
  for (let i = 0; i < num; i++) {
    fibo.push(first); // 1
    fibo.push(second); // 1, 1
    third = first + second; // 2
    fibo.push(third); // 1, 1, 2
    first = second + third; // 1 + 2
    second = third + first; // 2 + 3 
    console.log(fibo);
  }

  return fibo[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

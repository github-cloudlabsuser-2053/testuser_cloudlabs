function calculateNumbers (a, b) {
  return a + b;
}

//write a function to multiple a number ten times
function multiplyByTen (a) {
  return a * 10;
}   

//write a fibinacci function  that returns the nth number in the sequence       
function fibonacci (n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//write a function that returns the factorial of a number
function factorial (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


//take two numbers and check and return true if one of the numbers is 100 or sum of both the numbers is 100

const is100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(is100(100, 0));
console.log(is100(0, 100));
console.log(is100(50, 50));
console.log(is100(10, 20));
console.log(is100(100, 100));

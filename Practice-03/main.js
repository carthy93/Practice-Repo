// second largest number in an array

let Arr = [8, 9, 7, 6, 2, 1];
const secondLargest = (Arr) => {
  Arr.sort();
  Arr.reverse();
  return Arr[1];
};
secondLargest(Arr);
console.log("secondLargest", secondLargest(Arr));

// --------------------

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3); ///   returns false

//-----------------

function foo() {
  let a = (b = 0); // here a is a local variable, b is a global variable but b doesnot have scope here it was accidently declared as global variable
  a++;
  return a;
}

foo();
console.log(typeof a);
console.log(typeof b);

// second largest number in an array

let Arr = [8, 9, 7, 6, 2, 1];
const secondLargest = (Arr) => {
  Arr.sort();
  Arr.reverse();
  return Arr[1];
};
secondLargest(Arr);
console.log("secondLargest", secondLargest(Arr));

// Reference: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
// Statement: There is an array with some numbers. All numbers are equal except for one. Try to find it!
//  findUniq([1, 1, 1, 2, 1, 1]) === 2;
//  findUniq([0, 0, 0.55, 0, 0]) === 0.55;
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
  const temp = arr.sort().splice(0, 2);
  return temp[0] != temp[1] ? temp[0] : arr.sort().splice(-1)[0];
}

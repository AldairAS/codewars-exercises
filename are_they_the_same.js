// Reference: https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
// Statement:

/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/
function comp(array1, array2) {
  if (!array1) return false;
  if (!array2) return false;
  let asquared = [];
  array1.forEach((element) => {
    asquared.push(element * element);
  });
  let result = true;
  asquared.sort();
  array2.sort();
  let i = 0;
  asquared.forEach((element) => {
    if (element != array2[i]) return (result = false);
    i++;
  });
  return result;
}

comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361]
);

let a = [];
let b = [];

comp(a, b);

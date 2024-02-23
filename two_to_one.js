// Reference: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
// Statement: Take 2 strings "s1" and "s2"including only letters from "a" to "z". Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2
//Example:
//  a = "xyaabbbccccdefww"
//  b = "xxxxyyyyabklmopq"
//  longest(a, b) -> "abcdefklmopqwxy"
//  a = "abcdefghijklmnopqrstuvwxyz"
//  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(a, b) {
  a = a.split("");
  b = b.split("");
  let newArr = [];
  a.forEach((element) => {
    if (!newArr.includes(element)) newArr.push(element);
  });
  b.forEach((element) => {
    if (!newArr.includes(element)) newArr.push(element);
  });

  return newArr.sort().join("");
}

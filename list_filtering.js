// Reference: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript
// Statement: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((e) => typeof e == "number");
}

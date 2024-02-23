// Reference: https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
// Statement:Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  const result = a.filter((element) => !b.includes(element));
  return result;
}

arrayDiff([1, 2, 2, 2, 3], [2]);

// Reference:https://www.codewars.com/kata/5949481f86420f59480000e7/javascript
// statement: Given a list of integers, determine whether the sum of its elements is odd or even, give your answers as a string matching "odd" or "even" if the input array is empty consider it as: [0] (array with zero).|
function oddOrEven(array) {
  let answer = "";
  let sum = 0;
  if (array.length >0 ) {
    sum = array.reduce((accumulator, element) => {
      accumulator + element, 0;
    });
    (sum % 2 == 0)
      ? (answer = "even")
      : answer = "odd";
  } else {
    answer = "even";
  }

  return answer;
}

oddOrEven([1,4,6,4]);

// Reference:https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript
// Statement: our task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Example "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  if (words == "") return "";
  let arrWords = words.split(" ");
  let order = [];

  arrWords.forEach((element) => {
    element.split("").forEach((e) => {
      if (parseInt(e)) {
        order.push({ word: element, value: e });
      }
    });
  });

  order.sort((a, b) => a.value - b.value);
  let text = order.reduce(
    (accumulator, element) => accumulator + element.word + " ",
    ""
  );

  return text.trim();
}

order("4of Fo1r pe6ople g3ood th5e the2");

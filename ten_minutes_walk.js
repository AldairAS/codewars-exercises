// Reference: https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript
// statement:You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  if ((walk.length > 10) | (walk.length % 2 != 0)) return false;
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  walk.forEach((element) => {
    element == "n" ? n++ : element == "s" ? s++ : element == "e" ? e++ : w++;
  });
  return n - s == 0 ? (e - w == 0 ? true : false) : false;
}
isValidWalk(["n", "s"]);

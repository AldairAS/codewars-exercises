// Reference: https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// Statement: There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let mean =  classPoints.reduce((accumulator, element) => accumulator + element, 0)/classPoints.length
  return (yourPoints>mean)?true: false;
}

/*
 Reference: https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript
 Statement: Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

*/

function dirReduc(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == "NORTH") & (arr[i + 1] == "SOUTH")) {
      i++;
    } else if ((arr[i] == "SOUTH") & (arr[i + 1] == "NORTH")) {
      i++;
    } else if ((arr[i] == "WEST") & (arr[i + 1] == "EAST")) {
      i++;
    } else if ((arr[i] == "EAST") & (arr[i + 1] == "WEST")) {
      i++;
    } else {
      if (i != 0 & result.length>0) {
        if ((arr[i] == "NORTH") & (result[result.length - 1] == "SOUTH")) {
          result.pop()
        } else if ((arr[i] == "SOUTH") & (result[result.length - 1] == "NORTH")) {
          result.pop();
        } else if ((arr[i] == "WEST") & (result[result.length - 1] == "EAST")) {
          result.pop();
        } else if ((arr[i] == "EAST") & (result[result.length - 1] == "WEST")) {
          result.pop();
        } else {
          result.push(arr[i]);
        }
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);

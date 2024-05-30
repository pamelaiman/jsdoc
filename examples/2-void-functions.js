
/**
 * Mutates an array of strings by adding in a given string twice.
 * @param {string[]} arrOfStrings - the existing array of strings
 * @param {string} newString - the string to add twice
 * @returns {void}
 */
function addTwiceToArray(arrOfStrings, newString) {
  arrOfStrings.push(newString);
  arrOfStrings.push(newString);
}
console.log("\n------ addTwiceToArray -------");
let arrOne = ['hi', 'hello'];
console.log("Given arrOne", arrOne);
// VOID: console.log("After executing addTwiceToArray(arrOne, 'hey'):", addTwiceToArray(arrOne, "hey"));
addTwiceToArray(arrOne, 'hey')
console.log("It has been changed to:", arrOne);


/**
 * Sorts an array of numbers in-place, in descending order
 * @param {number[]} arrOfNums - input array of numbers to sort
 * @returns {void}
 */
function orderByDescending(arrOfNums) {
  arrOfNums.sort((a, b) => a - b); // don't worry about the argument used here
  arrOfNums.reverse();
}
console.log("\n------ orderByDescending -------");
let arrTwo = [3, 1, 2, 4];
console.log("Given arrTwo is", arrTwo);
// VOID: console.log("After executing orderByDescending(arrTwo):",orderByDescending(arrTwo));
orderByDescending(arrTwo)
console.log("It has been changed to:", arrTwo);

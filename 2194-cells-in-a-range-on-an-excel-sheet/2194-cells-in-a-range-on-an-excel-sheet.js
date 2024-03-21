/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let firstL = s[0];
  let firstN = s[1];
  let secondN = s[s.length - 1];
  let secondL = s[s.length - 2];
  let tfirstN = s[1];
  let arr = [];
  for (let i = firstL.charCodeAt(0); i <= secondL.charCodeAt(0); i++) {
    if (secondN == 1) {
      arr.push(`${String.fromCharCode(i)}1`);
    } else {
      firstN = tfirstN;
      while (firstN <= secondN) {
        arr.push(`${String.fromCharCode(i)}${firstN++}`);
        console.log(firstN);
      }
    }
  }
  return arr;
};
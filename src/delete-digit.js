const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = n.toString().split('');
  if (numbers[0] < numbers[1]) {
                numbers.splice(0, 1);
                let result = '';
                numbers.forEach((num) => {
                    result = result + num;
                })
                return (+result);
            }
    let small = n;
    for (let i = 0; i < numbers.length; i++) {
        if (+numbers[i] < +small) {
            small = numbers[i];
        }
    }
    numbers.splice(numbers.indexOf(small),1);
    let result = '';
    numbers.forEach((num) => {
        result = result + num;
    })
    return(+result);
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!Array.isArray(names)) {
        throw new Error("'names' parameter must be an instance of the Array!");
    }

    if (names.length === 0) {
        return [];
    }

    for (let i = 0; i < names.length; i++) {
        let value = 0;
        for (let j = 0; j < names.length; j++) {
            if (names[i] === names[j] && i !== j) {
                names[j] = names[j] + `(${++value})`;
            }
        }
    }
return names;
}

module.exports = {
  renameFiles
};

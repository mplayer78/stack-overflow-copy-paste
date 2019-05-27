export default arrIncludes

/**
 * Original source: https://stackoverflow.com/questions/237104/
 * How do I check if an array includes an object in JavaScript?
 * This function will check if an array includes an object by default or other primitive & return a boolean
 *
 * @param {Array} array - Array to be checked
 * @param {String} type - primitive to check against array (default object)
 * @return {Boolean} - Result of check
 */
function arrIncludes(array, type = 'object') {
  return array.some(x => typeof x === type.toLowerCase())
}

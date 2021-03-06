
/**
 * Determines whether an array contains the specified value.
 *
 * @param   {array} array
 * @param   {mixed} value
 * @returns {boolean}
 */
function contains(array, value) {
	return array.indexOf(value) !== -1;
}


module.exports = contains;

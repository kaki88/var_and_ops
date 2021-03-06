/**
 * Check the equality of two parameters
 * Two parameters are equals, only if they have
 * the same type, and same value.
 * @param  {[type]}
 * @param  {[type]}
 * @return {Boolean}
 */
 
// === est une égalité stricte (renvoie true si les opérandes sont égaux et de même type)
var isEquals = function(a, b) {
	return a === b;
};



/**
 * Add 10 and then multiply the result by 5
 * @param  {[type]}
 * @return {[type]}
 */
 
// si on ne met pas de parenthèse la priorité est donné à la multiplication (précédence des opérateurs)
var add10AndMultiplyBy5 = function(a) {

	return (a + 10) * 5;
}

/**
 * Should compute the exponentiel of the first number by the second
 * @param  {[int]} number
 * @param  {[int]} factor
 * @return {[int]} result
 */
 
// la fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire base exposant
var computeExponention = function(a, b) {

	return Math.pow(a, b);

}



/**
 * Computes the arithmetic sum of all the arguments
 * @return {[integer]}
 */
 


var computeSum = function() {

	var result = 0;

	for (i = 0; i < arguments.length; i++) {
		result += +arguments[i];
	}
	return result;

}


/**
 * It  computes and return the double of the specified number
 * @param  {[number]}
 * @return {[number]}
 */
 
 
var shouldComputeDouble = function(number){
	var a = number;
    var multiply = function(b){
    	var a = b*2;
    	return a;
    }
    return multiply(a);
}





module.exports.isEquals = isEquals;
module.exports.sum = computeSum;
module.exports.add10AndMultiplyBy5 = add10AndMultiplyBy5;
module.exports.exponentiel = computeExponention;
module.exports.computeDouble = shouldComputeDouble;

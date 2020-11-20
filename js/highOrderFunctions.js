/**
 * Higher Order Functions
 * Son funciones que reciben como parametro otra funcion
 */

/**
 * Nuestra funcion map recibe otra funcion como parametro (callback) 
 * map es un Higher Order Function
 */
const result = [1, 2, 3, 4, 5, 6, 7].map(item => item * 2)
console.log(result)
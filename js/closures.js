/**
 * Los Closures es la combinacion de las funciones con el scope dentro de otra funcion
 * donde fue declarada
 * ademas que los Closures recuerdan en Scope donde fueron declaradas
 */

const sum = (a) => { // Scope que tiene mi Closure
  return function (b) { // Mi closure
    return a + b
  }
}
console.log(sum(20)(20))

const sum2 = (a) => (b) => a + b // Closures con arrow functions
console.log(sum2(10)(12))
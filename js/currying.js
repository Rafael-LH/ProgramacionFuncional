/**
 * Currying es descomponer funciones en otras funciones mas pequeñas
 * para que cada una reciba un valor
 */

const sumThreeNumbers = (a, b, c) => {
  return a + b + c
}
console.log(sumThreeNumbers(1, 2, 3)) // 6

// Currying function
const sumThreeNumbers = (a) => {
  return function (b) { // Closure
    return function (c) { // Closure
      return a + b + c
    }
  }
}
console.log(sumThreeNumbers(1)(2)(3)) // 6


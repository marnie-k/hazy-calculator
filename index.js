function filterNumbers(item) {
  return !isNaN(item) && item !== ''
}
// This will filter out non numbers and empty strings

function filterOperators(item) {
  const operators = ['+', '-', '*', '/']

  return filterNumbers(item) || operators.includes(item)
}
// Filter for operators


function doMath(filteredArray) {
  switch (filteredArray[1]) {
    case '+':
      return Number(filteredArray[0]) + Number(filteredArray[2])
    case '-':
      return Number(filteredArray[0]) - Number(filteredArray[2])
    case '*':
      return Number(filteredArray[0]) * Number(filteredArray[2])
    case '/':
      return Number(filteredArray[0]) / Number(filteredArray[2])
    default:
      return NaN
  }
}
// uses new array with number - operator - number 
// performs math based on the operator

function calculate(incoming) {
  let filteredArray = []

  incoming.forEach((item) => {
    if (filterOperators(item)) {
      filteredArray.push(item)
    }
  })

  if (filteredArray.length !== 3) return NaN

  return doMath(filteredArray)
}

module.exports = calculate

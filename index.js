const calculate = (array) => {
  /*
1. What does it do?
runs an arithmetic calculation based upon an array of inputs 
(eg. `[2, '*', 10]`) 

2. What  are the inputs (parameters)?
an  array that can contain numbers, strings, empty strings, null, zeros

3. What is the output?
a number or NaN

    run for loop over arrays
        convert stringified numbers to numbers -> push to new array
        remove empty values and non numeric strings -> push to new array
        convert null to zero -> push to new array
    
    convert array to object
      key value pairs:
          value 1
          operator
          value 2      
      
    calculate on key value pairs in object
        if statement for operator

    return calculated value


test 1 -> one number is stringified
['2', '*', 4]

test 2 -> null === 0
[10, '+', null]

test 3 ->  ignore empty strings and continue operation
[, , '', 23, '-', , 12]

test 4 -> ignore non-numeric strings and continue operation
['13', 'foo', '*', 'bar', 2]


test 5 -> return NaN if no operator
['13', , '', 15]

*/
}

module.exports = calculate

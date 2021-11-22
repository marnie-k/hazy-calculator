const calculate = (array) => {
  /*
1. What does it do?
runs an arithmetic calculation based upon an array of inputs 
(eg. `[2, '*', 10]`) 

2. What  are the inputs (parameters)?
an  array that can contain numbers, strings, empty strings, null, zeros

3. What is the output?
a number or NaN


Function steps:

1. Filter array
      "The filter() method creates a new array filled with elements that 
      pass a test provided by a function.

      The filter() method does not execute the function for empty elements."    
        this will take case of:
        * `undefined` values should be ignored
        * Empty string values (eg. `''`) should be ignored  
        * Non-numeric values (eg. `'foo'`) should be ignored
        *   remove empty values and non numeric strings as condition of filter
          ???? will this remove operands?????

2. Run for loop over new array
        convert stringified numbers to numbers -> push to new array
        * Stringified numbers (eg. `'2'`) should be treated as numbers
           ???? is this necessary - maybe just use truthy ==  ?????
           
        convert null to zero -> push to new array
        * `NULL` should be treated as zero -> push to new array
  
3. Convert new array to object
    "The Object.assign() method is used to copy the values of all enumerable 
    own properties from one or more source objects to a target object. 
    It will return the target object.

      Object.assign({}, ['a','b','c']); "

      key value pairs:
          value 1
          operator
          value 2      
      
4. Calculate on key value pairs in object
        if statement for operator

    
5. Return calculated value


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

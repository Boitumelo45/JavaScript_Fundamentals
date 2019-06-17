"use strict"

let numbers = [1,1,2,3,5,8,13,21,34]
let [num1, ...restOfnumbers]  = numbers
console.log(num1, restOfnumbers);

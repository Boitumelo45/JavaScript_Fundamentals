"use strict"

//type conversion applied
let [num1, num2] = [12, "12"]

if(num1 == num2){
  //javascript will perform a type conversion
  console.log(true);
}

//strict equality operator
if(num1 === num2){
  //javascript does not perform a type conversion
  console.log('This is not true');
}

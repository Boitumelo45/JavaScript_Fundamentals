"use strict"
/*
  Rest parameters collects items as array values
*/
var items = (...values) =>{
  values.forEach((element) =>{
    console.log(element);
  })
}

console.log('__________________');
items('banana', 'apple', 'berry', 'peach', 'carrot', 'orange')
console.log('__________________');
items([1,2,3,4,5], 'bus', 'bicycle', 'truck')

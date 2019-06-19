"use strict"

let num = 10

if(num > 0){
  let num = 2 //temporarily overrides num
  console.log(num) //uses it in scope
}

console.log(num) //10

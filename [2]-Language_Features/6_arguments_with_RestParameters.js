"use strict"

function findNumber(check, ...values){
  let count = 0
  values.forEach(
    element => {
      if(check === element){
        count++
      }
    }
  )
  return count
}

let count = findNumber(2, 1, 4, 5, 2, 2, 2, 2, 6, 7, 3)
console.log("There are " + count + " instances matching: [2]");
//There are 4 instances matching: [2]

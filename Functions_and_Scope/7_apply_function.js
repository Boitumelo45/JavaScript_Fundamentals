
/*
  apply function: you can parse in arguments
  call and apply are used to cahnge the value of
  this - keyword
*/

"use strict"

let genericUser = {
  full_name : "a",
  unique: 0,
  getUniqueNumber : function(number){
    console.log(this) //{ unique: 1235, full_name: 'Mr X' }
    return number + this.unique
  }
}

let user1 = {
  full_name : "Mr X",
  unique : 1235
}
console.log(genericUser.getUniqueNumber.apply(user1, ['UN: '])); //UN: 1235

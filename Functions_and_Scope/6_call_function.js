
/*
  call functions
*/

"use strict"

let name_ = {
  full_name : "John Doe",
  surname : function(){
    console.log(this) //{ full_name: 'Malcolm X', age: 32 }
    return this.full_name.split(' ')[1]
  }
}

let generic_name = {
  full_name: "Malcolm X",
  age: 32
}

//notice how surname property ID is referenced here
console.log(name_.surname.call(generic_name)); //X

"use strict"

/*
  this is used in functions declared under an object
  or classes to access the properties or variables
  of that object
  */

let name_ = {
  full_name : "John Doe",
  surname : function(){
    console.log(this) //{ full_name: 'John Doe', surname: [Function: surname] }
    return this.full_name.split(' ')[1]
  }
}

console.log(name_.surname()); //Doe

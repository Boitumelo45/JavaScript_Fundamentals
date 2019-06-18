"use strict"

/*
  Constructors are used to instantiated new objects
  or class in other languages
*/

function Name(fname, lname){
    this.fname = fname,
    this.lname = lname,
    this.full_name = function(){
        return `${this.fname} ${this.lname}`
    }
}

//instantiation
let name = new Name('John', 'Doe')
console.log(name.full_name())

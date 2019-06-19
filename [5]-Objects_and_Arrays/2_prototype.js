"use strict"

/*
  Constructors are used to instantiated new objects
  or class in other languages
*/

function Name(fname, lname){
    this.fname = fname,
    this.lname = lname
}

//method associated to Name
Name.prototype.full_name = function(){
        return `${this.fname} ${this.lname}`
}

//instantiation
let name = new Name('John', 'Doe')
console.log(name) //Name { fname: 'John', lname: 'Doe' }
console.log(name.full_name())

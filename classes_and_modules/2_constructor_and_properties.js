"use strict"

//class
class Name {
      //class input parameters defined within a constructor
      constructor(name){
            this.name = name
      }
}

//instantiation
let nameX = new Name('John')
console.log(nameX.name) //John
console.log(nameX) //Name { name: 'John' }

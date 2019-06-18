"use strict"

//class
class Name {
      //class input parameters defined within a constructor
      constructor(name){
            this.name = name
      }

      nameArray(){
            return this.name.split('')
      }

}

//instantiation
let nameX = new Name('John')
console.log(nameX.nameArray()) //[ 'J', 'o', 'h', 'n' ]

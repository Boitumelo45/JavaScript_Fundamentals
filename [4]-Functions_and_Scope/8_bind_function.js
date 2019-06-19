"use strict"

/*
  bind copies one object to another
  */

let name_ = {
  full_name : "John Doe",
  surname : function(){
    console.log(this)
    /*
        {
            full_name: 'John Doe',
            surname: [Function: surname]
          }
    */
    return this.full_name.split(' ')[1]
  }
}

let newUser = {
  full_name : "Mario Glen"
}
console.log(name_.surname.call(newUser)); //Doe
let fn = name_.surname.bind(newUser)
console.log(fn) //[Function: bound surname]
console.log(fn())
/*
      {
        full_name: 'Mario Glen'
    }
      Glen
*/

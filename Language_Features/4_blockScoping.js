/*
  It is prefered to use let over var
  the compiler complains if dynamic typing is not used when using
  let
*/
if(true){
  //block scoping
  let num = 23          //only exists within this block scope
  var another_number = 13
}

//console.log(num); //does not exist here
console.log(another_number);

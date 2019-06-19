/*
  String is a built in JavaScript object
*/


String.prototype.hello = function(){
  return this.toString() + ' world!'
}

console.log('hello'.hello());

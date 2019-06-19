"use strict"

try{
  number  = 10
}catch(e){
  console.log("Error: " + e);
}finally{
  console.log("Runs any way.");
}
/*
Error: ReferenceError: number is not defined
Runs any way.
*/

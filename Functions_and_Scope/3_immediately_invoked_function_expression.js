
//IIFE
(() =>{
  console.log('IIFE');
})(); //IIFE

//or
(function(){
  console.log('Another IIFE');
})(); //Another IIFE


//IIFE with arguments
var add = ((a,b) =>{
  return a + b
})(1,2);

console.log(add);

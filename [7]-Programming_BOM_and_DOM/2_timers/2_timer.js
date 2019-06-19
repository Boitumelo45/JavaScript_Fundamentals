/*
  timers fires asynchonously
*/

/*
let timeOut = setTimeOut(function(){
  console.log('1000 ms delay');
}, 1000);
*/

//multiple intervals --repeatedly
let intervalTimer = setInterval(function(){
  console.log('1000 ms delay');
}, 1000);

//cancel timer
clearInterval(intervalTimer)

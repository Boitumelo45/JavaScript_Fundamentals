"use strict"

let p = document.getElementById('change')
let timerP = setInterval(function(){
    console.log("Debug");
}, 2000);

p.innerText = "This is the stament changed to"

//cancel timer
clearInterval(timerP)

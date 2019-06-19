/*
  Promises are used to work with
  asynchronous processes.

  timers
*/

let promise = new Promise(
      function(resolve, reject){
            setTimeout(reject, 100, 'value to catch')
      }
)

console.log(promise) //Promise {status: "pending"}

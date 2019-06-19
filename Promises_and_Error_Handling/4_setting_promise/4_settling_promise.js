/*
  Promises are used to work with
  asynchronous processes.

  Promise are about handling a success value
  or an error value

  find more: Mozilla Developer Network
*/

let promise = new Promise(
      function(resolve, reject){
            setTimeout(reject, 5000, 'value to catch')
      }
);

promise.then(
      value => console.log("fulfilled: " + value),
      error => console.log("rejected: " + error)
);

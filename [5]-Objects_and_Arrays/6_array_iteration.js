
let array = [1,2,3,4,5]

array.forEach((element, index) =>{
  console.log(`${index}:${element}`);
})

/*
    0:1
    1:2
    2:3
    3:4
    4:5
*/

let odds = array.filter(
  (element) => element%2 != 0? element : null
)

let even = odds.every(
  (element) => element%2 != 0
)

console.log(odds);
console.log(even);

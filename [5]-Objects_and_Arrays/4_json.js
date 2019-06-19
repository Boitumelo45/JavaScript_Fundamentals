/*
  The purpose of JSON is to transfer JavaScript objects
  over the wire (HTTP)
*/

let dataObject = {
  name: 'john',
  lastName: 'Doe',
  age : 21,
  occupation: "engineer"
}

//send this data object over the wire
console.log(JSON.stringify(dataObject))
/*
  {
    "name": "john",
    "lastName": "Doe",
    "age": 21,
    "occupation": "engineer"
  }
*/

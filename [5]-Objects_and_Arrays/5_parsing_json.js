

let jsonIn =
`
[
  {
      "name": "john",
      "lastName": "Doe",
      "age" : 21,
      "occupation": "engineer"
  }
]
`

let data = JSON.parse(jsonIn)[0]
console.log(data.name) //john

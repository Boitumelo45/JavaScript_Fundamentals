"use strict"

var name = (yourName) => {
    let surname = 'Doe' //accessible here only
    return yourName + ' ' + surname
}

console.log(name('John'));

var name_to_list = (yourName) => {
    let list
    let fn = (word) =>{
        list = [...word]  //spread syntax
        return list
    }
    return fn(yourName) //scope block
}
console.log(name_to_list('John'))

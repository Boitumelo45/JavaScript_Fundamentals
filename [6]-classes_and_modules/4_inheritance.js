"use strict"

class Animal{
      //constructor
      constructor(legs = 2, arms = 2, gender, breed){
            this.legs = legs,
            this.arms = arms,
            this.gender = gender,
            this.breed = breed
      }

      //method
      information(){
            let data = {
                  legs : this.legs,
                  arms : this.arms,
                  gender: this.gender,
                  breed : this.breed
            }

            if(data.arms == 0){
                  delete data.arms        //animal has no arms
                  return data
            }else{
                  return data
            }

      }
}


//instantiation
let dog = new Animal(4,0,'male','Bull dog')
console.log(dog.information())
/*
      { legs: 4, gender: 'male', breed: 'Bull dog' }
*/


//inherit a class
class Dog extends Animal {
      //add more code here
}

let puppy = new Dog(4,0,'female','chiwawa')
console.log(puppy.information()) //{ legs: 4, gender: 'female', breed: 'chiwawa' }

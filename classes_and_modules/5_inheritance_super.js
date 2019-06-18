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

            if((data.arms == 0 && data.legs > 4)){
                  delete data.arms        //animal has no arms
                  data.breed = 'Alien species'
                  return data
            }else if(data.arms == 0){
                  delete data.arms        //animal has no arms
                  return data
            }else{
                  return data
            }

      }
}


//inheritance

class Dog extends Animal{
      information(){
            return super.information() //parent method
      }
}

let dog = new Dog(8, 0, 'male', 'bull dog')
console.log(dog.information())
/*
      { legs: 8, gender: 'male', breed: 'Alien species' }
*/

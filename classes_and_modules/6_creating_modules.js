/*
  ECMAScript 2015
*/

import {Animal} from './6_models/animal.js';

let dog = new Animal(8, 0, 'male', 'bull dog')
console.log(dog.information())
/*
      { legs: 8, gender: 'male', breed: 'Alien species' }
*/

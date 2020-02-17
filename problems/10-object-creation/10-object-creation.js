/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

const obj1 = {
  name: 'Gerard',
  age: 24
}

function Obj2(name,age){
  this.name=name;
  this.age=age;
}
let obj2 = new Obj2('Gerard',23);

class Obj3 {
  name;
  age;
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
let obj3 = new Obj3('Gerard',22);
console.log('obj1');
console.log(obj1);
console.log(obj2);
console.log(obj3);
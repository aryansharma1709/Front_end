// set-5
// -----------QUESTION NO:1---------
function outer() {
    let outerVar = 'I am from outer function';
    function inner() {
      console.log( outerVar);
    }
    inner();
    }
   outer();

//  ----------QUESTION:2-----------------


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age}`);
}

const john = new Person('John', 30); 
john.greet();
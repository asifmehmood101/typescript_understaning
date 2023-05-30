// ? interface allow us to define the structure of an object and interface are not compiled its pure typescript concept
//! if we want to work with object we definitely use interface

//? custom type and interface major differences
//! interface are use to share same functionality with difference classes

// ? implements force the existence of the variables and methods among classes

//? readonly: its only change once and cant change after the object has been init,
//? we can use it on type

//? Extends: can use to inherited the other interface properties

//? Interfaces as Function types:

//? custom type function
//* type Addfn = (a: number, b: number) => number;

//? create function with interface

interface AddFn {
  //? anonymous
  (a?: number, b?: number): void;
}

const add: AddFn = (n1, n2) => {
  if (n1 && n2) {
    return n1 + n2;
  }
  return 'nothing to see here';
};

interface age {
  age: number;
}

interface Named {
  readonly name: string;
}

//? Extends: extends multiple interfaces

interface IGreetable extends Named, age {
  greet(phrase: string): void;
}

class Person implements IGreetable {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(phrase + this.name);
  }
}

let user1: IGreetable;

user1 = new Person('asif', 28);
user1.greet('Hi there my name is:');

user1.age;

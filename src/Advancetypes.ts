//? advance types

/*
 * Intersection Types
 * type Guards
 * Discriminated Unions
 * Type casting
 * function overloads
 */

//? Intersection types: allow us to combine other types and its like a

type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'asif',
  privilege: ['c', 'r', 'u', 'd'],
  startDate: new Date(),
};

console.log(el);

//? type guards
/*
 * typeof
 * property in objectName
 * instanceof  only use in classes
 */

type Combineable = string | number;
type Numberic = number | boolean;

type Universal = Combineable & Numberic;

function add1(a: Combineable, b: Combineable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name:', emp.name);
  if ('privilege' in emp) {
    console.log('Privilege:', emp.privilege);
  }
}

//? discriminated union types approach

interface Bird {
  type: 'bird';
  flySpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function animalMovement(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flySpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
}

animalMovement({ type: 'bird', flySpeed: 25 });

//? type casting with typescript

const userInput = (<HTMLInputElement>(
  document.getElementById('userInput')!
)) as HTMLInputElement;

userInput.value = 'hello';

//? index properties: if we dont have idea how many properties we gona use we uses index properties aproach

interface createError {
  [error: string]: string;
}

const createErrorTemplate: createError = {
  warning: 'item not exist',
};

//* list of Generic Module content

/*
 * What is Generic
 * Generic Function and Classes
 * Constraints
 * Special Typesript types
 *
 */

//? what are Generic
/*
 ! Feature that allow you to create a reuseable components or function 
 ! that can work with different types of data without sacrificing type safety.
 ! they provide a way to define placeholder for types that will be determined when the component or function is used
 
 ? here is example below 
 
 */

function identity<T>(arg: T) {
  return arg;
}

//? using the generic function

let result1 = identity<number>(10); //! result1 is of type number
let result2 = identity<string>('Hello World'); //! result2 is of type string

//? other example with array
const names: Array<string> = [];

//? typescript know its string array and its allow use to use string methods
names[0]?.split('');

//? another example with promise
//? Question: how to enable typescript support on union generic type
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000);
});

promise.then((data) => data.split(' '));

//? creating generic function types

//? providing constrain to generics by extends them with what they should be
function merge<A extends object, U extends object>(obj1: A, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergeObj = merge(
  { name: 'Asif', hobbies: ['ali', 'imran khan'] },
  { age: 30 },
);
console.log(mergeObj);

//? working with other generic

interface Ilengthy {
  length: number;
}

function countAndDescription<T extends Ilengthy>(element: T): [T, string] {
  let description = 'Got no value';

  if (element.length === 1) {
    description = 'Got 1 element';
  } else if (element.length > 1) {
    description = 'Got' + element.length + 'Elements';
  }

  return [element, description];
}

const getElementAndLength = countAndDescription(['hello', 1]);

console.log(getElementAndLength);

//? generic keyof type

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return 'value ' + obj[key];
}

const showExtraction = extractAndConvert({ name: 'asif' }, 'name');

console.log(showExtraction);

//? some utility types

//? pick<type, keys>

//* Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type

//* example

interface TODO {
  title: string;
  description: string;
  complete: boolean;
}

//? create new type from above interface type

type TODOPreview = Pick<TODO, 'title' | 'complete'>;

let PreviewTodo: TODOPreview = {
  title: 'hello',
  complete: true,
};

//? omit<type,keys> is use to exclude the certain property

//* example

type TODODetail = Omit<TODO, 'complete'>;

let detailTodo: TODODetail = {
  title: 'tea',
  description: 'Make teas',
};

//? Partial<type> is use to  type constructs a type with all properties of Type set to optional.
//? It can be very useful when we are writing the update logic of an object.

type todoOptional = Partial<TODO>;

let optionalTodo: todoOptional = {
  title: 'optional',
  description: 'we are testing Partial',
};

//? Required<type> Does the opposite of Partial. It constructs a type with all properties of Type set to required.
//? It can be used to ensure that no optional properties appear in a type.

interface user {
  name: string;
  age: number;
  address?: string;
  occupation?: string;
}

type userAllRequired = Required<user>;

let userDetail: userAllRequired = {
  name: 'asif',
  age: 31,
  address: '393',
  occupation: 'Frontend Developer',
};

//? Readonly<type>: The Readonly utility type construct a type with all properties of Type set to read only.
//? Reassigning new values to its variable and properties will result in TypeScript warning.

type User = {
  name: string;
  age: number;
  address: string;
  occupation: string;
};

type ReadOnlyUser = Readonly<User>;

const user12: ReadOnlyUser = {
  name: 'Peter',
  age: 24,
  address: 'Toronto',
  occupation: 'software_engineer',
};

const user2: ReadOnlyUser = {
  name: 'Asif',
  age: 30,
  address: 'Pakistan',
  occupation: 'software_engineer',
};

//? Record<key,type> The Record utility type constructs an object type with property keys from Keys and value of type Type.

type playerType = 'Player1' | 'Player2';

interface UserDetail {
  name: string;
  age: number;
  address: string;
  occupation: string;
}

type team = Record<playerType, UserDetail>;

// task-1.1
let str = 'hello';
let arr = ['h', 'e', 'l', 'l', 'o'];

console.log(str.length);
console.log(arr.length);

console.log(str[0]);
console.log(arr[0]);

// console.log(str.push('!'));

// task-1.2
let string = 'JavaScript';

let array = string.split('');

console.log(array);

let strArray = ['c', 'a', 't'];

let arrayStr = strArray.join('');

console.log(arrayStr);

// Task 2.1 — Case Conversion

let name = '  JavaScript';

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());

// task 3.1

let sentence = 'Learning JavaScript is fun!';

console.log(sentence.slice(0, 8));
console.log(sentence.slice(-4));

// Task 3.2 — Combine Strings

let str1 = 'Hello';
let str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(`${str1} ${str2}`);
console.log(str2 + ' ' + str2);

// task 4.1

// function reverseString(str) {
//   return str.split('').reverse().join('')
// };

// console.log(reverseString('JavaScript'));

// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString('JavaScript'));

function reverseString(str) {
  let reversed = '';

  for (let val of str) {
    reversed = val + reversed;
  }
  return reversed;
}

console.log(reverseString('JavaScript'));

// Task 5.1 — Build a Profile Object

let student = {
  name: 'oni',
  age: 19,
  grade: 'A',
};

console.log(student);
console.log(student.name);

// task 5.2
const pc = {
  processor: 'Amd Ryzen',
  monitor: 'sumsung',
  gpu: 'Nvidia',
};

// JavaScript object is like a pc
// A pc contains processor,monitor,gpu,motherboard etc.Here each of them contains a value and together they are a pc.
// like that js object contains many key and values and together we call it an object

//Task 6.1 — Dot vs Bracket Notation

let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

console.log(car.brand);
console.log(car['model']);

car['color'] = 'black';
console.log(car);

car.year = 2023;

console.log(car);

// Task 7.1 — Keys and Values

let book = {
  title: 'The Hobbit',
  author: 'Tolkien',
  pages: 310
};

console.log(Object.keys(book));
console.log(Object.values(book));

delete book.pages;
console.log(book);

// Task 7.2 — Nested Objects

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}

console.log(user.address.city);

user.address.country = 'USA';

console.log(user);

delete user.address.zip;

console.log(user);


// Task 8.1 — Loop Through Properties

let scores = {
  math: 90,
  science: 85,
  art: 95
};

for (key in scores) {
  console.log(key,scores[key]);
}

let sum = 0;
let count = 0;
for (key in scores) {
  sum += scores[key];
  count++;
}
console.log(sum);

let avarage = sum / count;

console.log(avarage);



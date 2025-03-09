// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// -------------------------------------------------
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const result = data.flatMap(item => item.values);
// console.log(result);

//------------------------------------------------

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const result = people.some(person => person.age < 20);
//    console.log(result);

//-------------------------------------------------


// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every(number => number % 2 === 0);
// console.log(result);




//------------------------
// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const result = numbers.find(number => number % 2 !== 0);
// console.log(result);

//-----------------------------------


 // Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const result = numbersArray.toSorted((a, b) => a - b);
// console.log(result);



// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const result = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(result);


 //Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const result = users.toSorted((a, b) => a.age - b.age);

// console.log(result);

//---------------------------
//Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];
// const result = user.filter(us => us.are > 20);
// console.log(result);

//-------------------------

  // Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, number) => total + number, 0);
// console.log(result);
//-------------------------
 //Завдання 11:

 // Створи клас для калькулятора, який має такі методи:
 // - метод number, який набуває початкового значення для наступних операцій
 // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 // - методи add, substruct, divide, multiply
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//     constructor() {
//         this.num = 0;

//     }
//     Number(value) {
//         this.num = value;
//     }
//     getResult() {
//         return this.num;
//     }
//     add(value) {
//         this.num += value;
//         return this;
//     }
//     substruct(value) {
//         this.num -= value;
//         if (value !== 0) {
//             this.num /= value;
//         }
//     }
//     divide(value) {
//         this.num /= value;
//     } 
//      multiply(value) {
//         this.num *= value;
//     } 
// }
// const calculator = new Calculator();
// calculator.number().add().substruct().multiply().divide()

// console.log(calculator);



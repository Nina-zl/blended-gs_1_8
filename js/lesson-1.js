// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().



// const number = Number(prompt('Enter number'));
// 1 var
// if (number === 10) {
//     alert('Вірно');
// } else {
//     alert('Невірно');
// }

// 2 var
// number === 10 ? alert('Вірно') : alert('Невірно');

// 3 var
// alert(number === 10 ? 'Вірно' : 'Невірно');


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

//  const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//  alert($(min) Ваше число входить в 1 чверть");
//  } else if (min <= 30) {
//  alert(${min) Ваше число входить в 2 чверть);
//  } else if (min <= 45) {
//  alert($(min) Ваше число входить в 3 чверть");
//  } else {
//  alert($(min) Ваше число входить в 4 чверть);


    
    
    
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Введіть число від 1 до 4:'); 
// let result; 
// switch (num) { 
// case '1': 
// result = 'зима'; 
// break; 
// case '2': 
// result = 'весна'; 
// break; 
// case '3': 
// result = 'літо'; 
// break; 
// case '4': 
// result = 'осінь'; 
// break; 
// default: 
// result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно"; 
// break; 
// I 
// } 
//     console.log(result);


    // Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// Напишіть функцію isAdult (age), яка приймає число вік користувача і повертає tr 
// якщо параметр аде більше чи дорівнює 18. 
// В іншому випадку вона запитує підтвердження через confirm 
// 1 повертає його результат (true/false). 
// const checkAge confirm('Are you adult?') 
// console.log(checkAge); 
//1 
// function isAdult (age) { 
// if (age 18) { 
// return true; 
//
// } else { 
// const checkAge confirm('Are you adult?'); 
// //
// return checkAge; 
//
// } 
//} 
// 1/2 
// // function isAdult (age) { 
// // if (age 18) { 

// return true; 
//
// } 
// return confirm('Are you adult?'); 
// //} 
// 1/3 
// function isAdult (age) { 
// // return age >18? true: confirm('Are you adult?'); 
 
// return age >= 18 || confirm('Are you adult?'); 
// I 
//     console.log(isAdult(25));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

//     function min = (a, b) {
//         if (typeof a ==="number" && typeof b === "number") {
//             if (a > b) {
//                 return b;
//             }
            
//                 else {
//                     return a;
//                 }
                        
//     } else {

// return 'Not a number!';
// min(a: any, b: any): number "Not a number!"
//             console.log(min(14, 1);


//             function min(a, b) {
// if (typeof a !== 'number' || typeof b !== 'number') {
// return 'Not a number!'
// }
// return Math.min(a, b)
// }
//     console.log(min(5, 7));




//   function min(a, b) {
//     return (typeof a !== 'number' || typeof b !== 'number') ? 'Not a number!': Math.min(a, b);
// }







// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

//     function getNumbers(min, max) {
//         let sum = 0;
//         for (let i = max; i >= min; i--) {
//             console.log(i);
//             if (i % 2 === 0) {
//                 sum += i;
//             }
//         }
//         return sum;
//     }
// console.log(getNumbers(28, 13));
    
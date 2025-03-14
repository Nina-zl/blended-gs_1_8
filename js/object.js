// Напиши скрипт, который, для объекта 'user последовательно:
//-добавляет поле mood со значением "happy
// заменяет значение hobby на skydiving'
//-заменяет значение `premium на false
//-выводит содержимое объекта `user` в формате ключ: значение используя
//Object.keys()` и `for...of

/*const user = {
name: 'Mango', 
age: 20, 
hobby: 'html', 
premium: true,
};
user.mood = "happy";
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user); // отримати масив ключів
for (const key of keys) {  // for of зчитати масив і перебрати всі значення
   
    // console.log(key); // Ключ
    // console.log(user[key]); // Значення властивості
    console.log(`${key}: ${user[key]}`);
    
} */

   /* ## Example 2 - метод Object.values() 
• У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для 
- суммирования всех зарплат и сохраните результат в переменной sum. Должно  получиться 390. Если объект 
salaries пуст, то результат должен быть 0. 
 */
 
// const salaries = { 
// John: 100, 
// Ann: 160, 
// Pete: 130, 
// }; 
//  const salaries1 = {};

// 1) Робимо ф - ю де параметром є обєкт
// 2) Потрібно просумувати значення обєкта
// Додати перевірка на порожній обєкт

// const calcSalaries = function (salaries) {
//     const values = Object.values(salaries);
//     if (values.length === 0) {
//         return 0;
//     }
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// }
// console.log(calcSalaries(salaries));

// v2
// let total = 0;
// for (const salary in salaries) {
//     total += salaries[salary];
// }
// console.log(total);



/*## Example 3 Массив объектов 
• Напишите ф-цию `calcTotalPrice(stones, stoneName) 
которая принимает массив 
- объектов и строку c названием камня. ф-ция считает и возвращает общую стоимость www www 
• камней с таким именем, ценой и количеством из обьекта 
/*


Перебір обєкта
Є обєкт, потрібно пробігтися обєкту і порахувати сумму знячень записану під  всіма ключами
*/
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3
// }

// let total = 0;
// for(const key in feedback) {
//     total += feedback[key];
// }
// console.log(total);




//  * Напиши скрипт, який для об'єкта user, послідовно:
//  * - додає поле mood зі значенням 'happy'
//  * - замінює значення hobby на 'skydiving'
//  * - замінює значення premium на false
//  * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
//  */

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }


// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);

//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`); 
//     }
// }

// foo(user);






// Модуль 4.1

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };


// function summa(obj) {
//     let total = 0;
//     const values = Object.values(obj);

//     for(const value of values) {
//         total += value;
//     }
//     return total;
// }

// console.log(summa(salaries));
// -------------------------------------------------------



//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
//   const account = {
    // Поточний баланс рахунку
    // balance: 0,
  
    // Історія транзакцій
    // transactions: [],
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    // createTransaction(amount, type) {
    //   const obj = { id: amount, amount, type };
    //   return obj;
    // },


  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    // deposit(amount) {
    //   this.balance += amount;
    //   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    //   this.transactions.push(transaction);
    // },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    // withdraw(amount) {
    //   if(this.balance < amount) {
    //     console.log("недостатньо коштів");
    //     return;
    //   }

    //   this.balance -= amount;
    //   const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    //   this.transactions.push(transaction);
    // },
  


    /*
     * Метод повертає поточний баланс
     */
    // getBalance() {
    //   return this.balance;
    // },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    // getTransactionDetails(id) {
    //   for(const item of this.transactions) {
    //     if(item.id === id) {
    //       return item;
    //     }
    //   }
    //   return "Not found";
    // },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
//     getTransactionTotal(type) {
//       let res = 0;

//       for(const item of this.transactions) {
//         if(item.type === type) {
//           res += item.amount;
//         }
//       }

//       return res;
//     },
// };


// account.deposit(300);
// account.withdraw(100);

// console.log(account);








// --------------------------------------------------------------

// Завдання колорит
// "У тебе є масив об'єктів cars, де кожен об'єкт містить інформацію про авто:
// const cars = [
//   { brand: ""Toyota"", model: ""Corolla"", price: 15000, quantity: 5 },
//   { brand: ""Honda"", model: ""Civic"", price: 18000, quantity: 3 },
//   { brand: ""Ford"", model: ""Focus"", price: 17000, quantity: 4 },
//   { brand: ""BMW"", model: ""X5"", price: 50000, quantity: 2 }
// ];
// Твоє завдання: колорит
// Написати функцію getCarModels(brand), яка приймає назву бренду (brand) і повертає масив моделей цього бренду.
// Якщо бренд є в масиві, поверни масив моделей.
// Якщо такого бренду немає, поверни пустий масив [].
// Написати функцію calculateCarTotalPrice(model), яка приймає назву моделі (model) і повертає загальну вартість всіх авто цієї моделі (ціна * кількість).
// Якщо модель є в масиві — поверни вартість.
// Якщо моделі немає — поверни ""Model not found!"".
// Приклад роботи:
// console.log(getCarModels(""Toyota"")); // [""Corolla""]
// console.log(getCarModels(""Honda"")); // [""Civic""]
// console.log(getCarModels(""Mercedes"")); // []

// console.log(calculateCarTotalPrice(""Civic"")); // 54000 (18000 * 3)
// console.log(calculateCarTotalPrice(""Focus"")); // 68000 (17000 * 4)
// console.log(calculateCarTotalPrice(""Tesla"")); // ""Model not found!"" Решил так const cars = [
//   { brand: 'Toyota', model: 'Corolla', price: 15000, quantity: 5 },
//   { brand: 'Honda', model: 'Civic', price: 18000, quantity: 3 },
//   { brand: 'Ford', model: 'Focus', price: 17000, quantity: 4 },
//   { brand: 'BMW', model: 'X5', price: 50000, quantity: 2 },
// ];

// function getCarModels(brand) {
//   const carModels = [];

//   for (let car of cars) {
//     if (car.brand === brand) {
//       carModels.push(car.model);
//     }
//   }

//   return carModels;
// }

// function calculateCarTotalPrice(model) {
//   for (let car of cars) {
//     if (car.model === model) {
//       return car.price * car.quantity;
//     }
//   }
//   return `${model} not found!`;
// } После лекции с Object.key и Object.value теперь есть сомнения в правильности ее решения. Или для массива объекта  не обязательно делать Object.?"
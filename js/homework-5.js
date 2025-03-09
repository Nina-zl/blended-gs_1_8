/*
function each(array, callback) {
    const res = [];
    for (const item of array) {
        res.push(callback(item));
    }
    
    return res;
}

console.log(each(
    [64, 49, 36, 25, 16], function (value) {
        return value * 2;
    }
));

console.log(each(
    [64, 49, 36, 25, 16], function (value) {
        return value - 10;
    }
));

console.log(each(
    [64, 49, 36, 25, 16], function (value) {
        return Math.sqrt(value);
    }
));
*/

// function foo(a, b, c) {
//     return a + b + c;
// }

// const arrowFoo = (a, b, c) => {
//     return a + b + c;
// }

// console.log(foo(1, 2, 3));
// console.log(arrowFoo(10, 20, 30));



// const calc = (a, b, callback) {
//     const result = callback(a, b);
//     return result;

// }

// console.log(calc(1, 2, (x, y) => {
//     return x + y
// }))
// console.log(calc(10, 3, (x, y) => {
//     return x - y
// }));

// const arr = [5, 10, 15, 20, 25];
// arr.forEach(function (number, index, array) {
//     console.log(number, index, array);
    
// })


// const arr = [5, 10, 15, 20, 25];
// let total = 0;
// arr.forEach((item) => {
//     total += item;

// })
// console.log(total);

//------------------------------------

// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
// const logItems = (array) => {
//      array.forEach(item, index => {
//         console.log(`${index + 1} - ${item}`);
        
//      });
// }
 
// logItems(["Mango", "Poly", "Ajax"]);


//---------------------------------
 
 // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 
// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }
// const printContactsInfo = (obj) => {
//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");
    
//     namesArr.forEach((item, index) => {
//         console.log(`${item} - ${phonesArr[index]}`);
             
//     });
    
// }


//  printContactsInfo({
//    names: "Jacob,William,Solomon,Artemis",
//    phones: "89001234567,89001112233,890055566377,890055566300",
//  });


//---------------------------------
 
 // Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const calculateAverage = (...args) => {
//     let total = 0;
//     args.forEach(item => {
//         total += item;
        
//     });
//     return total / args.length;
// }


// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 24, 4, 84));


// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];
// const getModels = (cars) => {
//     return cars.map((item) => item.model);
          
//     }
   
// console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
  

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((item) => {
//         return {
//             ...item, // make: "Mazda", model: "CX-9", amount: 7, price: 31520
//             price: item.price * (1 - discount)
//         }
//      })
//  }


//  console.table(makeCarsWithDiscount(allCars, 0.2));
//  console.table(makeCarsWithDiscount(allCars, 0.4));






// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
/*
* Збільшуємо кількість годин гравця за id
*/

// const playerIdToUpdate = "player-3";

// const newArr = players.map((player) => {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }
//     return player;
// })
// console.table(newArr);



// const update = (players, playerId) => {
//     return players.map((player) => {
//         if(player.id === playerId) {
//             return {
//                 ...player,
//                 timePlayed: player.timePlayed + 100
//             }
//         }
//         return player;
//     })
// }

// console.log(update(players, playerIdToUpdate));

//__________________________________________________
//const number = [2, 10, 15, 20, 25];

//const res = number.filter((number, index) => number > 10
    // const res = number.filter((number, index) => {
    // return number > 10;
//);
//console.log(res);


/**
 * Рахуємо загальну кількість годин
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];
                           
// Метод every
 
// const isAiiOnline = players.every((item) => item.online);
// console.log(isAiiOnline);


// Метод some

// const isAiiOnline = players.some((player) => player.online);
// const isAiiOnline = players.some((player) => player.timePlayed > 400);
// console.log(isAiiOnline);


// const result = players.reduce((acc, player) => acc + player.timePlayed, 0);

// console.log(result);

//-------------------------

// Метод reduse
 
// const numbers = [1, 10, 20, 30, 40];
// const total = numbers.reduce((acc, item) => {
//     return acc + item;

// }, 0);
// console.log(total);

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// const total = Object.values(salary).reduse((acc, item) => acc + item);

// console.log(total);


// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const result = players.reduce((acc, player) => acc + player.timePlayed, 0);
// console.log(result);



//  const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045, quantity: 2 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455, quantity: 3  },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195, quantity: 5 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520, quantity: 1  },
   
// ];

// const totalCars = allCars.reduce((acc, car) => acc + car.price * car.quantity, 0)

// console.log(totalCars);

// -------------------------------------------------

// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

//  Нехай функція  fillterByPryse повертає масив моделей автомобілів,
//  * але тільки тих, ціна менша параметра threshold


// const fillterByPryse = (cars, threshold) => {
//     return cars.filter((car) => car.price < threshold);
      
    
// }


// console.log(fillterByPryse(allCars, 30000));


// const getCarsWithType = (cars, type) => {
//     return cars.filter((car) => car.type === type);

// }
// console.log(getCarsWithType(allCars, "sedan"));




// const getByType = (arr, type) => {
//     return arr.find(item => item.type === type);
    
// };



/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = (cars) => {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
// }


// console.log(getModelsOnSale(allCars))




// const arr = [2, 10, 15, 20, 25];
// const number = arr.find((item) => {
//     return item > 10;

// });
// console.log(number);


/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = (cars) => {
//     return cars
//         .filter(car => car.onSale)
//         .toSorted((a, b) => a.price - b.price)
//         .map(car => {
//             return {
//                 model: car.model,
//                 price: car.price
//             }
//         })
// }

// console.table(getSortedCarsOnSale(allCars))


//-------------------------

// Метод toSorted

// const numbers = [1, 5, 0, 4, 9];
// const res = numbers.toSorted();
// console.log(res);


// const numbers = [1, 50, 0, 42, 9];
// const res = numbers.toSorted((a, b) => a - b);
// console.log(res);

// const res1 = numbers.toSorted((a, b) => b - a);
// console.log(res1);



// const arr = ["A", "b", "a", "B"];
// const res = arr.toSorted();
// console.log(res);
// console.log(arr.toSorted((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted((a, b) => b.localeCompare(a)));


//----------------------------------
// відсортівати за ігровим часом
 
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const res = players.toSorted((a, b) => a.timePlayed - b.timePlayed);
// console.table(res);



//------------------------------

// ланцюжки методів

// const numbers = [1, 3, 5, 4, 9];
// const res = numbers
//     .filter((num) => num > 2)
//     .map((num) => num * 3)
//     .toSorted((a, b) => a - b);

// console.log(res);


// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

//  Нехай функція  getModelOnSales повертає масив моделей автомобілів,
//  * але тільки тих, що на розпродажі

// const getModelOnSales = (cars) => {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
// }
// console.log(getModelOnSales(allCars))


// const getModelsOnSale = (cars) => {
//     return cars
//         .filter((car) => car.onSale)
//         .toSorted((a, b) => a.price - b.price)
//         .map(car => {
//             return {
//                 model: car.model,
//                 price: car.price
//             }
//         })
// }
// console.table(getModelsOnSale(allCars))


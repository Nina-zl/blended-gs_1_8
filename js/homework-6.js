
// const user = {
//     userName: "Yura",
//     showThis() {
//         console.log(this);
        
//     }
// }
// user.showThis()

// function foo() {
//     console.log(this);
    
// }
// foo();

//-------------------------

// const user = {
//     userName: "Yura",
//     showThis() {
//         console.log(this);
        
//     },
//     showName() {
//         console.log(this.userName);
        
//     }
// }
// // user.showThis()
// const foo = user.showThis;
// foo();

// const lalala = user.showName;
// lalala();




// Напишіть метод calcTotalPrice(stonelane), aкий приймає назву каменів
// розраховує та повертай загальну вартість каменів з таким імям, імям та властивості stones
// (функція в обєкті)
/*
const chopShop = {
stones: [

  {name: "Emerald", price: 1300, quantity: 4},
  {name: "Diamond", price: 2700, quantity: 3},
  {name: "Sapphire", price: 1400, quantity: 7},
  {name: "Ruby", price: 800, quantity: 2},
    ],
    calcTotalPrice(stoneName) { 
        const stone = this.stones.find((item) => item.name === stoneName);
        if (!stone) {
            return `${stoneName} not found`;
        }
        return stone.price * stone.quantity;
    }
   
};
console.log(chopShop.calcTotalPrice("Ruby"));
*/

//-------------------


//  метод call

// function snowThs() {
//     console.log(this);
    
// }
// const objA = {
//     a: 5,
//     b: 10
// }
// snowThs.call(objA);




// function snowThs(tototo, lalala) {
//     console.log(this);
//     console.log(tototo, lalala);
   
// }
// const objA = {
//     a: 5,
//     b: 10
// }
// snowThs.call(objA, "Alice", 5);





//   function snowThs(tototo, lalala) {
//     console.log(this.b);
//     console.log(tototo, lalala);
   
// }
// const objA = {
//     a: 5,
//     b: 10
// }

// const objB = {
//     a: 100,
//     b: 200
// }

// snowThs.call(objA, "Alice", 5);
// snowThs.call(objB, "Alice", 5);


// ------------------------------------




//  метод apply

// snowThs.apply(objB, ["Petya", 10]);


// Є два обєкти . Потрібно створити функцію що змінюватиме колір в цих обєктах
// */
// function chengeColor(color) {
//     console.log ("this, this")
//     this.color = color;
// }

// const hat = {
//     color: "red"
// }

// const sweater = {
//     color: "black"
// }
// chengeColor.call(hat, "blue");
// console.log(hat);

// chengeColor.apply(sweater, ["yellow"]);
// console.log(sweater);




//  метод bind

// function changeColor(color) {
//     console.log ("this, this")
//     this.color = color;
// }

// const hat = {
//     color: "red"
// }

// const sweater = {
//     color: "black"
// }
// const changehatColor = changeColor.bind(hat, "blue");

// changehatColor();
// console.log(hat);

// const changesweterColor = changeColor.bind(sweater);

// changesweterColor("green");
// console.log(sweater);


//-----------------


// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.



// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);


//----------------------------



//  Прототип обєкта
   
// const animal = {
//     legs: 4
// }

// const dog = Object.create(animal);
// dog.name = "Sharik";
//  console.log(dog);
// // console.log(dog.legs);

// const keys = Object.keys(dog);
// console.log(keys);


// Програмне забезпечення для автомобіля а саме натискання кнопок набору та
//  зниження швидкості в системі круїз контроль. Створити обєкт cruiseConrtol з
//  методами accelerete, decrease, властивостями speed, brand

// const cruiseConrtol = {
//     speed: 0,
//     brand: "Audi",
//     accelerete() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
        
//     },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//     console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
   
// }
// cruiseConrtol.accelerete();
// cruiseConrtol.accelerete();
// cruiseConrtol.decrease();
// cruiseConrtol.decrease();
// cruiseConrtol.decrease();
// console.log(cruiseConrtol);



// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, 
// функція має опрацьовувати об'єкт автомобіля як this


// const MAX_SPEED = 60;

// const audi = {
//     brand: "audi",
//     speed: 30
//  }

// const bmw = {
//     brand: "bmw",
//     speed: 70
//  }
// function speedSensor(maxSpeed) {
//     if (this.speed <= maxSpeed)
// }

















// const audi = {
//     brand: "audi",
//     speed: 30
// }

// const bmw = {
//     brand: "bmw",
//     speed: 70
// }


// function speedSensor(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухфється з безпечною швидкістю.`;
//     }
//     return `${this.brand} - Перевищено швидкість!`

//     return this.speed <= maxSpeed ?
//         `Автомобіль ${this.brand} рухається з безпечною швидкістю.` :
//         `${this.brand} - Перевищено швидкість!`
// }

// console.log(speedSensor.call(audi, MAX_SPEED));
// console.log(speedSensor.apply(bmw, [MAX_SPEED]));









//---------------------------------



/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 25,
//     numberOfPosts: 30,
//     topics: ["tech", "sport"]
// });

// alice.updatePostCount(10);
// console.log(alice.getInfo());

// console.log(alice);


// ------------------------------------------------

// 6.2 Класи
/*
class Car {
constructor(brend, model) {
    this.brend = brend;
    this.model = model;

}

getModel() {
    return this.model;

}
}
const audi = new Car("audi", "q7");
console.log(audi.getModel());

// const bmw = new Car("bmw", "x");
// console.log(bmw);
*/

// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     setEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }




// const alice = new User("Alice", "alice@gmail.com");

// alice.login = "Super Alice";

// alice.setEmail("super_alice@gmail.com");

// console.log(alice.getEmail());
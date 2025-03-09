

// Масив об'ктів

//  Перебор масива
//  Пошук об'єкта за значенням властивості
//  Колекція значень властивості

//   const friends = [
//  {name: "Ross", online: false},
//  {name: "Joey", online: true},
//  {name: "Chandler", online: false},
//  {name: "Phoebe", online: true},
//  {name: "Monica", online: true},
//  {name: "Rachel", online: false},
//  ];
 
// function findByname(allFriends, friendName) {
//     for(const friend of allFriends) {
//         if(friend.name.toLowerCase() === friendName.toLowerCase()) {
//             return friend;
//         }
        
//     }
//     return "Not found";
// }
// console.log(findByname(friends, "Joey"));



// Отримуємо імена всіх друзів

// function getNames(allFriends) {
    //  пройтись по масиву , тягти всі значення що під ключиком. Щоб скласти в масив потрібно його створити
//     const names = [];
//     for(const item of allFriends) {
//         names.push(item.name);
//     }
//     return names;
// }
// console.log(getNames(friends));




// Отримуємо імена друзів які зараз онлайн

// function getOnlineFriedns(allFriends) {
//     const onlineFriedns = [];
//     for(const item of allFriends) {
        // if (item.online === true) {
//         if (item.online) {
//             onlineFriedns.push(item.name);

            
//         }
//     }
//     return onlineFriedns;

// }
// console.log(getOnlineFriedns(friends));

// -----------------------------------------



// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з
// таким ім'ям, ціною та кількістю з об'єкта


// const stones = [
// {name: "Смарагд", price: 1300, quantity: 4},
// {name: "Діамант", price: 2700, quantity: 3},
// {name: "Canфір", price: 400, quantity: 7},
// {name: "Щебінь", price: 200, quantity: 2},
// {name: "Canфір", price: 400, quantity: 7},
// ];

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;
//     for(const item of stones) {
//         if(item.name === stoneName) {
//             sum = item.price * item.quantity;
//         }
        
//     }
//     return sum;
// }
// console.log(calcTotalPrice(stones, "Смарагд"));
//  ---------------------------------------


// Методи обєкту
/*
const playlist = {
    name: "My playlist",
    reting: 5,
    tracks: ["track-1", "track-2", "track-3"],
    changeName(newName) {
        playlist.name = newName;
        
    }

}
playlist.changeName("lallala");

console.log(playlist);
/*

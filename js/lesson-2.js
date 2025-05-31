
// BLENDED 2

// Task 1

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// styles[styles.indexOf('blues')] = 'classic';

// function logItems(array) {
//     for (const item of array) {
//         console.log(`${(array.indexOf(item)+1)} - ${item}`);
//     };
// };

// logItems(styles)
// -------------------------------------------------------
// task 2

// function checkLogin(array) {
//     const userName = prompt("input your name");
//     let greet;
//     for (const item of array) {
//         if (item.toLowerCase() === userName.toLowerCase()) {
//             greet = `Welcome, ${userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase()}!`
//             break;
//         } else {
//             greet = 'user not found';
//         };
//     };
//     return greet;
// };

// console.log(checkLogin(["Peter", "John", "Igor", "Sasha"]));
// //----------------------------------------------------------
// task 3

// function calculateAverage(...arg) {
//     let sum = 0;
//     for (const item of arg) {
//         if (!Number(item)) {
//             return "input numbers only"
//         } else {
//             sum += item;
//         };
//     };
//     return sum / arg.length;
// };

// console.log(calculateAverage(1, 2, 3, 4));
// ------------------------------------------------------
// task 4

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNeigbors(arr) {

//     let newItem = 0;
//     let newArr = [];

//     console.log(arr);

//     for (const item of arr) {
//         if(arr[arr.indexOf(item) + 1]) {
//         newItem = item + arr[arr.indexOf(item) + 1];
//         newArr.push(newItem);
//         };
//     };
    
//     return newArr;
// };

// console.log(sumNeigbors(someArr));
// ---------------------------------------------------
// task 5

// function findSmallerNumber(numbers) {
//     if (Array.isArray(numbers)) {
//         const min = Math.min(...numbers);
//         return min;
//     } else {
//         return "not an array";
//     };

// };

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80];
// console.log(findSmallerNumber(numbers));

// // console.log(Array.isArray(numbers));
// ------------------------------------------------------
// task 6

// function findLongestWord(string) {
//     let longestWord = "";
//     const strArr = string.split(" ");
//     for (const item of strArr) {
//         if (item.length > longestWord.length) {
//             longestWord = item;
//         };
//     };
//     return longestWord
// };

// console.log(findLongestWord("London is the capital of Great Britain"));
// ---------------------------------------------------
// task 7

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;


// console.log(user);

// const keys = Object.keys(user);
// console.log(keys);
// for (let key of keys) {
//     console.log(`${key}:${user[key]}`);
    
// };
// ---------------------------------------------------
// task 8

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  
// let sum = 0;
// const salariesValues = Object.values(salaries);

// for (const intem of salariesValues) {
//     sum += intem;
// };

// console.log(sum);
// -------------------------------------------------------
// task 9

// const calculator = {
//     read(a, b) {
//         this.key1 = a;
//         this.key2 = b;
//     },
//     sum() {
//         if (this.exist()) {
//             const sum = this.key1 + this.key2;
//             return sum;
//         } else {
//             console.log('there are no such ptoperties');
//         };
//             },
//     mult() {
//         if (this.exist()) {
//             const mult = this.key1 * this.key2;
//             return mult;
//         } else {
//             console.log('there are no such ptoperties');
//         };
//     },
//     exist() {
//         if (this.key1 !== undefined && this.key2 !== undefined) {
//             return true;
//         } else {
//             return false;
//         };

//     }
// };
// console.log(calculator);

// calculator.read(22, 48);
// console.log(calculator.sum());
// console.log(calculator.mult());
// ------------------------------------------------------
// task 10

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// function calcTotlaPrice(fruits, fruitName) { 
//     let sum = 0;
//     for (const item of fruits) { 
//         if (item.name.toLowerCase() === fruitName.toLowerCase()) { 
//             sum += item.price * item.quantity;
//         }
//     }
//     return sum
// };

// console.log(calcTotlaPrice(fruits, 'яблуко'));
// console.log(calcTotlaPrice(fruits, 'апельсин'));
// console.log(calcTotlaPrice(fruits, 'банан'));
// console.log(calcTotlaPrice(fruits, 'груша'));
// console.log(calcTotlaPrice(fruits, 'виноград'));













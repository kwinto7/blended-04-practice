
//--------------------------task 1
// const number = Number(prompt("input number"));
// if(number === 10) {
//     console.log(true);    
// } else {
//     console.log(false);
// }

//--------------------------task 2
// const min = 5;
// const max = 40;
// for(let i = 0; i <=20; i++) {
//     let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(randomInRange);
// }

//--------------------------task 3
// const num = Number(prompt("input number from 1 to 4"));
// let result;

// switch(num) {
//     case 1:
//         result = "winter";
//         break;
//     case 2:
//         result = "spring";
//         break;
//     case 3:
//         result = "summer";
//         break;
//     case 4:
//         result = "autumn";
//         break;
//     default:
//         result = "I'm sorry you should input a number from 1 to 4";
// }
// console.log(result);

//--------------------------task 4 theory
// const str1 = "3";
// console.log(str1.padStart(2,"0"));

// const fullNumber = "1234567891234567";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber);

//--------------------------task 4
// const userInput = Number(prompt("input your number to transform to the time display format"));
// if(userInput) {
//     const result = userInput / 60;
//     const hours = String(Math.trunc(result));
//     const minutes = String(Math.round((result - hours) * 60));
//     console.log(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`);
// } else {
//     console.log("incorrect input try again");
// }

//--------------------------task 5
// const userLogin = prompt("enter please your login");
// console.log(userLogin);

// switch(true) {
//     case (userLogin === "admin" ||  userLogin === "Admin"):
//         const adminPassword = prompt("input admin password");
//         if(adminPassword === "i am boss") {
//             alert("hello boss");
//         } else {
//             alert("wrong password");
//         }
//         break;
//     case (userLogin === "" || userLogin === null):
//         alert("canceled");
//         break;
//     default:
//         alert("unknown user");
// }

//--------------------------task 6
// let i = 0;

// while(i <= 20) {
//     console.log(i);
//     i++;
// }

//--------------------------task 7
// function getNumber(min, max) {
//     let evenSum = 0;
//     for(let i = max; i >= min; i--) {
//         console.log(i);
//         if(i % 2 === 0) {
//             evenSum += i;
//         }
//     }
//     return evenSum;
// }
// console.log(`even numbers sum = ${getNumber(1, 6)}`);

//--------------------------task 8
// function min (a, b) {
//     if(typeof a === "number" && typeof b === "number") {
//         return  Math.min(a, b);
//     } else {
//         return  "not a number";
//     }
// }
// console.log(min(2, 3));

//--------------------------task 9
// function isAdult(age) {
//     if(age < 18) {
//         const verifyAge = prompt("confirm your age") >= 18 ? true : false;
//         return verifyAge;
//     } else {
//         return true;
//     }
// }
// console.log(isAdult(18));

//--------------------------task 10
// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++) {
//         switch(true) {
//             case(i % 3 === 0 && i % 5 === 0):
//                 console.log(i, "fizzbuzz");
//             break;
//             case(i % 3 === 0):
//                 console.log(i, "fizz");
//             break;
//             case(i % 5 === 0):
//                 console.log(i, "buzz");
//             break;
//         }
//     }
// }

// fizzBuzz(100);













// ////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true
// console.log(Boolean("")); // false

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)"); // This block will be executed because money is a truthy value
// } else {
//     console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is UNDEFINED"); // This block will be executed because height is a falsy value
// }

// ////////////////////////////////////
// // Equality Operators: == vs. ===
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)"); // This block will not be executed because age is a string and strict equality operator checks for both value and type

// if (age == 18) console.log("You just became an adult :D (loose)"); // This block will be executed because loose equality operator converts the string to a number and checks for equality

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// ////////////////////////////////////
// // Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // true
// console.log(hasDriversLicense || hasGoodVision); // true
// console.log(!hasDriversLicense); // false

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired); // false

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// // The switch Statement
// const day = "friday";

// switch (day) {
//     case "monday": // day === 'monday'
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos"); // This block will be executed because day is 'friday'
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// ////////////////////////////////////
// // Statements and Expressions
// 3 + 4; // This is an expression that evaluates to 7
// 1991; // This is a standalone value
// true && false && !false; // This is an expression that evaluates to false

// if (23 > 10) {
//     const str = "23 is bigger"; // This block will be executed and str will be defined
// }

// const me = "Jonas";
// console.log(`I'm ${2037 - 1991} years old ${me}`); // This will log "I'm 46 years old Jonas"

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? "wine 🍷" : "water 💧"; // If age is greater than or equal to 18, drink will be assigned "wine 🍷", otherwise "water 💧"
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = "wine 🍷";
// } else {
//     drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); // This will log "I like to drink wine 🍷" if age is greater than or equal to 18, otherwise "I like to drink water 💧"

// ////////////////////////////////////
// console.log("🏋️‍♀️");

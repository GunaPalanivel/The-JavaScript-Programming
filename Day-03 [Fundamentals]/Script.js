"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false; // Declare a variable hasDriversLicense and assign it a value of false
const passTest = true; // Declare a constant passTest and assign it a value of true

if (passTest) hasDriversLicense = true; // If passTest is true, assign true to hasDriversLicense
if (hasDriversLicense) console.log('I can drive :D'); // If hasDriversLicense is true, log 'I can drive :D' to the console

// const interface = 'Audio'; // SyntaxError: Unexpected strict mode reserved word
// const private = 534; // SyntaxError: Unexpected strict mode reserved word


///////////////////////////////////////
// Functions
function logger() { // Declare a function named logger
    console.log('My name is Jonas'); // Log 'My name is Jonas' to the console
}

// calling / running / invoking function
logger(); // Call the logger function
logger(); // Call the logger function
logger(); // Call the logger function

function fruitProcessor(apples, oranges) { // Declare a function named fruitProcessor with parameters apples and oranges
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // Create a string using template literals
    return juice; // Return the juice string
}

const appleJuice = fruitProcessor(5, 0); // Call the fruitProcessor function with arguments 5 and 0 and assign the returned value to appleJuice
console.log(appleJuice); // Log the value of appleJuice to the console

const appleOrangeJuice = fruitProcessor(2, 4); // Call the fruitProcessor function with arguments 2 and 4 and assign the returned value to appleOrangeJuice
console.log(appleOrangeJuice); // Log the value of appleOrangeJuice to the console

const num = Number('23'); // Convert the string '23' to a number using the Number constructor and assign it to the variable num


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) { // Declare a function named calcAge1 with parameter birthYeah
    return 2037 - birthYeah; // Return the result of subtracting birthYeah from 2037
}
const age1 = calcAge1(1991); // Call the calcAge1 function with argument 1991 and assign the returned value to age1

// Function expression
const calcAge2 = function (birthYeah) { // Declare a function expression named calcAge2 with parameter birthYeah
    return 2037 - birthYeah; // Return the result of subtracting birthYeah from 2037
}
const age2 = calcAge2(1991); // Call the calcAge2 function with argument 1991 and assign the returned value to age2

console.log(age1, age2); // Log the values of age1 and age2 to the console


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah; // Declare an arrow function named calcAge3 with parameter birthYeah that returns the result of subtracting birthYeah from 2037
const age3 = calcAge3(1991); // Call the calcAge3 function with argument 1991 and assign the returned value to age3
console.log(age3); // Log the value of age3 to the console

const yearsUntilRetirement = (birthYeah, firstName) => { // Declare an arrow function named yearsUntilRetirement with parameters birthYeah and firstName
    const age = 2037 - birthYeah; // Calculate the age by subtracting birthYeah from 2037
    const retirement = 65 - age; // Calculate the number of years until retirement by subtracting age from 65
    // return retirement; // Return the value of retirement
    return `${firstName} retires in ${retirement} years`; // Return a string using template literals
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob')); // Log the returned values of calling the yearsUntilRetirement function with different arguments to the console


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) { // Declare a function named cutFruitPieces with parameter fruit
    return fruit * 4; // Multiply the value of fruit by 4 and return the result
}

function fruitProcessor(apples, oranges) { // Declare a function named fruitProcessor with parameters apples and oranges
    const applePieces = cutFruitPieces(apples); // Call the cutFruitPieces function with argument apples and assign the returned value to applePieces
    const orangePieces = cutFruitPieces(oranges); // Call the cutFruitPieces function with argument oranges and assign the returned value to orangePieces

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`; // Create a string using template literals
    return juice; // Return the juice string
}
console.log(fruitProcessor(2, 3)); // Call the fruitProcessor function with arguments 2 and 3 and log the returned value to the console


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) { // Declare a function expression named calcAge with parameter birthYeah
    return 2037 - birthYeah; // Return the result of subtracting birthYeah from 2037
}

const yearsUntilRetirement = function (birthYeah, firstName) { // Declare a function expression named yearsUntilRetirement with parameters birthYeah and firstName
    const age = calcAge(birthYeah); // Call the calcAge function with argument birthYeah and assign the returned value to age
    const retirement = 65 - age; // Calculate the number of years until retirement by subtracting age from 65

    if (retirement > 0) { // If retirement is greater than 0
        console.log(`${firstName} retires in ${retirement} years`); // Log a string using template literals to the console
        return retirement; // Return the value of retirement
    } else { // Otherwise
        console.log(`${firstName} has already retired 🎉`); // Log a string using template literals to the console
        return -1; // Return -1
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas')); // Call the yearsUntilRetirement function with arguments 1991 and 'Jonas' and log the returned value to the console
console.log(yearsUntilRetirement(1950, 'Mike')); // Call the yearsUntilRetirement function with arguments 1950 and 'Mike' and log the returned value to the console
*/

/*
// Introduction to Arrays
const friend1 = "Michael"; // Declare a variable friend1 and assign it a value of 'Michael'
const friend2 = "Steven"; // Declare a variable friend2 and assign it a value of 'Steven'
const friend3 = "Peter"; // Declare a variable friend3 and assign it a value of 'Peter'

const friends = ["Michael", "Steven", "Peter"]; // Declare an array named friends with elements 'Michael', 'Steven', and 'Peter'
console.log(friends); // Log the value of friends to the console

const y = new Array(1991, 1984, 2008, 2020); // Declare an array named y using the Array constructor with elements 1991, 1984, 2008, and 2020

console.log(friends[0]); // Log the element at index 0 of the friends array to the console
console.log(friends[2]); // Log the element at index 2 of the friends array to the console

console.log(friends.length); // Log the length of the friends array to the console
console.log(friends[friends.length - 1]); // Log the last element of the friends array to the console

friends[2] = "Jay"; // Assign the value 'Jay' to the element at index 2 of the friends array
console.log(friends); // Log the value of friends to the console
// friends = ['Bob', 'Alice'] // TypeError: Assignment to constant variable.

const firstName = "Jonas"; // Declare a variable firstName and assign it a value of 'Jonas'
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends]; // Declare an array named jonas with elements firstName, 'Schmedtmann', the result of subtracting 1991 from 2037, 'teacher', and the friends array
console.log(jonas); // Log the value of jonas to the console
console.log(jonas.length); // Log the length of the jonas array to the console

// Exercise
const calcAge = function (birthYeah) {
  // Declare a function expression named calcAge with parameter birthYeah
  return 2037 - birthYeah; // Return the result of subtracting birthYeah from 2037
};
const years = [1990, 1967, 2002, 2010, 2018]; // Declare an array named years with elements 1990, 1967, 2002, 2010, and 2018

const age1 = calcAge(years[0]); // Call the calcAge function with the element at index 0 of the years array as the argument and assign the returned value to age1
const age2 = calcAge(years[1]); // Call the calcAge function with the element at index 1 of the years array as the argument and assign the returned value to age2
const age3 = calcAge(years[years.length - 1]); // Call the calcAge function with the last element of the years array as the argument and assign the returned value to age3
console.log(age1, age2, age3); // Log the values of age1, age2, and age3 to the console

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
]; // Declare an array named ages with elements that are the returned values of calling the calcAge function with different elements of the years array as arguments
console.log(ages); // Log the value of ages to the console

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"]; // Declare an array named friends with elements 'Michael', 'Steven', and 'Peter'

// Add elements
const newLength = friends.push("Jay"); // Add the element 'Jay' to the end of the friends array and assign the new length of the array to newLength
console.log(friends); // Log the value of friends to the console
console.log(newLength); // Log the value of newLength to the console

friends.unshift("John"); // Add the element 'John' to the beginning of the friends array
console.log(friends); // Log the value of friends to the console

// Remove elements
friends.pop(); // Remove the last element from the friends array
const popped = friends.pop(); // Remove the last element from the friends array and assign it to the variable popped
console.log(popped); // Log the value of popped to the console
console.log(friends); // Log the value of friends to the console

friends.shift(); // Remove the first element from the friends array
console.log(friends); // Log the value of friends to the console

console.log(friends.indexOf("Steven")); // Log the index of the element 'Steven' in the friends array to the console
console.log(friends.indexOf("Bob")); // Log -1 (indicating that 'Bob' is not found) to the console

friends.push(23); // Add the element 23 to the end of the friends array
console.log(friends.includes("Steven")); // Log true if the friends array includes the element 'Steven', otherwise log false
console.log(friends.includes("Bob")); // Log true if the friends array includes the element 'Bob', otherwise log false
console.log(friends.includes(23)); // Log true if the friends array includes the element 23, otherwise log false

if (friends.includes("Steven")) {
  // If the friends array includes the element 'Steven'
  console.log("You have a friend called Steven"); // Log 'You have a friend called Steven' to the console
}
*/

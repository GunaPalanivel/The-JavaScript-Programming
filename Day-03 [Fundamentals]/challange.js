// ///////////////////////////////////////
// // Coding Challenge #1

// // Define an arrow function 'calcAverage' to calculate the average of 3 scores
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test the 'calcAverage' function with sample values
// console.log(calcAverage(3, 4, 5));

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// // Define a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas')
// // The function logs the winner to the console, together with the victory points, according to the rule above
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// // Test the 'checkWinner' function with Test Data 1
// checkWinner(scoreDolphins, scoreKoalas);

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// ///////////////////////////////////////

// ///////////////////////////////////////
// // Coding Challenge #2

// // Define a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
// // The tip is calculated based on the rules: Tip 15% of the bill if the bill value is between 50 and 300, otherwise 20%
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // Test the 'calcTip' function with a bill value of 100
// console.log(calcTip(100));

// // Create an array 'bills' containing the test data
// const bills = [125, 555, 44];

// // Create an array 'tips' containing the tip value for each bill, calculated using the 'calcTip' function
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // Create an array 'totals' containing the total values, i.e., the bill + tip
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // Log the arrays 'bills', 'tips', and 'totals' to the console
// console.log(bills, tips, totals);

// ///////////////////////////////////////

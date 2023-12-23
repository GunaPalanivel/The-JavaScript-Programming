"use strict";

// Declare variables for the secret number, current score, and highscore.
let secretNumber, score, highscore;

// Function to initialize the game state.
const initGame = function () {
  // Generate a random secret number between 1 and 20.
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Set the initial score to 20 and highscore to 0.
  score = 20;
  highscore = 0;

  // Reset various elements and styles in the HTML document.
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

// Function to display a message in the HTML document.
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Initialize the game when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", initGame);

// Event listener for the "Check" button click.
document.querySelector(".check").addEventListener("click", function () {
  // Get the user's guess from the input field and convert it to a number.
  const guess = Number(document.querySelector(".guess").value);

  // Check if the guess is not a number.
  if (!guess) {
    displayMessage("⛔️ No number!"); // Display an error message if the guess is not a number.
  } else if (guess === secretNumber) {
    // Check if the guess is correct.
    displayMessage("🎉 Correct Number!"); // Display a success message if the guess is correct.
    document.querySelector(".number").textContent = secretNumber; // Display the secret number.

    // Change background color and width of the number display for correct guess.
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Update the highscore if the current score is higher.
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore; // Update the highscore in the HTML document.
    }
  } else if (guess !== secretNumber) {
    // Check if the guess is incorrect.
    if (score > 1) {
      // Provide hints and update the score for incorrect guesses.
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!"); // Display a hint message based on the guess.
      score--;
      document.querySelector(".score").textContent = score; // Update the score in the HTML document.
    } else {
      // End the game if the score is 0.
      displayMessage("💥 You lost the game!"); // Display a game over message.
      document.querySelector(".score").textContent = 0; // Set the score to 0.
    }
  }
});

// Event listener for the "Again" button click, to restart the game.
document.querySelector(".again").addEventListener("click", initGame);

'use strict';

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Selecting HTML elements for player 1
  const player0El = document.querySelector('.player--0');
  const score0El = document.getElementById('score--0');
  const current0El = document.getElementById('current--0');

  // Selecting HTML elements for player 2
  const player1El = document.querySelector('.player--1');
  const score1El = document.getElementById('score--1');
  const current1El = document.getElementById('current--1');

  // Selecting HTML elements related to the dice and buttons
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');

  // Variables to store game state
  let scores, currentScore, activePlayer, playing;

  // Function to initialize the game state
  const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // Set initial scores and current scores to 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Hide the dice image
    diceEl.classList.add('hidden');

    // Remove winner and active classes, and set active class for player 1
    player0El.classList.remove('player--winner', 'player--active');
    player1El.classList.remove('player--winner', 'player--active');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };

  // Function to switch the active player
  const switchPlayer = function () {
    // Reset current score and switch to the other player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Toggle the active class for player 1 and player 2
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

  // Event listener for the Roll Dice button
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // Generate a random dice number between 1 and 6
      const dice = Math.trunc(Math.random() * 6) + 1;

      // Set the source attribute of the dice image with the absolute path
      diceEl.src = `Images/dice-${dice}.png`;

      // Remove the 'hidden' class to display the dice image
      diceEl.classList.remove('hidden');

      // Check if the rolled number is not 1
      if (dice !== 1) {
        // Add the rolled number to the current score
        currentScore += dice;

        // Update the current score on the UI
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      } else {
        // Switch to the next player if the rolled number is 1
        switchPlayer();
      }
    }
  });

  // Event listener for the Hold button
  btnHold.addEventListener('click', function () {
    if (playing) {
      // Add current score to active player's total score
      scores[activePlayer] += currentScore;

      // Update the total score on the UI
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      // Check if the active player's total score is 100 or more
      if (scores[activePlayer] >= 100) {
        // End the game
        playing = false;

        // Hide the dice
        diceEl.classList.add('hidden');

        // Add winner class to the winning player and remove active class
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        // Switch to the next player if the game continues
        switchPlayer();
      }
    }
  });

  // Event listener for the New Game button
  btnNew.addEventListener('click', init);

  // Initialize the game on page load
  init();
});

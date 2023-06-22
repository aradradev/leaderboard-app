import './style.css';
import refreshScores from './modules/refreshScores.js';
import submitScore from './modules/submitScore.js';
import displayScores from './modules/displayScore.js';
import { gameId } from './modules/api.js';
import clearScores from './modules/clearScores.js';

// Refresh score
const refreshButton = document.getElementById('refresher');
refreshButton.addEventListener('click', async () => {
  const scores = await refreshScores(gameId);
  displayScores(scores);
});

// Clear score
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', async () => {
  await clearScores(gameId);
  const scores = await refreshScores(gameId);
  displayScores([]);
});

// Submit score
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const user = nameInput.value;
  const score = parseInt((scoreInput.value), 10);

  await submitScore(gameId, user, score);
  nameInput.value = '';
  scoreInput.value = '';
});

// call the function to display the scores from the api when the page loads
window.addEventListener('load', async () => {
  const scores = await refreshScores(gameId);
  if (clearButton) {
    displayScores([]);
    clearScores();
  } else {
    displayScores(scores);
  }
});
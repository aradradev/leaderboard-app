import './style.css';
import refreshScores from './modules/refreshScores.js';
import submitScore from './modules/submitScore.js';
import displayScores from './modules/displayScore.js';
import { gameId } from './modules/api.js';

// Refresh score
const refreshButton = document.getElementById('refresher');
refreshButton.addEventListener('click', async () => {
  const scores = await refreshScores(gameId);
  displayScores(scores);
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

// call the function to create a new game when the page loads
window.addEventListener('load', async () => {
  const scores = await refreshScores(gameId);
  displayScores(scores);
});
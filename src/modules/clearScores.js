import { apiUrl } from './api.js';
import displayScores from './displayScore.js';
import refreshScores from './refreshScores.js';

const clearScores = async (gameId) => {
  const res = await fetch(`${apiUrl}/games/${gameId}/scores`, {
    method: 'GET',
  });
  if (res.ok) {
    displayScores([]);
    refreshScores();
  }
};

export default clearScores;
const refreshScores = async (gameId) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);

  const data = await response.json();
  const scores = data.result;

  return scores;
};

export default refreshScores;
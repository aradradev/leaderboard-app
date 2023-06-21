const submitScore = async (gameId, user, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });

  const data = await response.json();
  const { result } = data;

  return result;
};

export default submitScore;
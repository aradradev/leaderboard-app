const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Fortnite Battle Royale' }),
  });

  const data = await response.json();
  const gameId = data.result.split(' ')[3];

  return gameId;
};
export const gameId = 'EAHeclczGK5W1kbc9Vj4';

export default createGame;
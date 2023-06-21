const displayScores = (scores) => {
  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = '';

  if (scores) {
    scores.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.user}: ${score.score}`;
      scoresContainer.appendChild(listItem);
    });
  }
};

export default displayScores;
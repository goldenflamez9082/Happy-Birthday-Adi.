window.onload = function() {
  const balloonContainer = document.getElementById('balloon-container');
  const scoreDisplay = document.getElementById('score');
  let score = 0;

  // Create 10 balloons
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('span');
    balloon.textContent = '🎈';
    balloon.style.fontSize = '2.5em';
    balloon.style.cursor = 'pointer';
    balloon.style.margin = '10px';
    balloon.onclick = function() {
      balloon.textContent = '💥';
      balloon.style.pointerEvents = 'none';
      score++;
      scoreDisplay.textContent = 'Score: ' +

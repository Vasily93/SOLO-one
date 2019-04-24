

const whereFromInput = document.getElementById('whereFrom-answer');
const planetInput = document.getElementById('planet-answer');
const fruitInput = document.getElementById('fruit-answer');
const tryInput = document.getElementById('try-answer');
const whereTravelInput = document.getElementById('whereTravel-answer');
const letsTryButton = document.getElementById('letsTry-button');

letsTryButton.addEventListener('click', () => {
   const whereFromAnswer = whereFromInput.value;
   const planetAnswer = planetInput.value;
   const fruitAnswer = fruitInput.value;
   const tryAnswer = tryInput.value;
   const whereTravelAnswer = whereTravelInput.value;

   const score = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer,whereTravelAnswer);
   const message = 'You Answered' + score + '/5 right!';
});
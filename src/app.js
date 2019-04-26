

const whereFromInput = document.getElementById('whereFrom-answer');
const planetInput = document.getElementById('planet-answer');
const fruitInput = document.getElementById('fruit-answer');
const tryInput = document.getElementById('try-answer');
const whereTravelInput = document.getElementById('whereTravel-answer');
const letsTryButton = document.getElementById('letsTry-button');
const quizResult = document.getElementById('quiz-result');
//
letsTryButton.addEventListener('click', () => {
   const whereFromAnswer = whereFromInput.value;
   const planetAnswer = planetInput.value;
   const fruitAnswer = fruitInput.value;
   const tryAnswer = tryInput.value;
   const whereTravelAnswer = whereTravelInput.value;
   //console.log('im here');

   if(whereFromAnswer.trim() === '' || planetAnswer.trim() === '' || fruitAnswer.trim() === '' 
   || tryAnswer.trim() === '' || whereTravelAnswer.trim() === '') {
      alert('All anwers a required!');
      return;
   }

function scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer) {
   whereFromAnswer = whereFromAnswer.toLowerCase();
   planetAnswer = planetAnswer.toLowerCase();
   fruitAnswer = fruitAnswer.toLowerCase();
   tryAnswer = tryAnswer.toLowerCase();
   whereTravelAnswer = whereTravelAnswer.toLowerCase();

   let score = 0;

   if(whereFromAnswer === 'russia') {
      score += 1;
   }
   if(planetAnswer === 'mars') {
      score += 1;
   }
   if(fruitAnswer === 'orange') {
      score += 1;
   }
   if(tryAnswer === 'skydiving') {
      score += 1;
   }
   if(whereTravelAnswer === 'machu pikchu') {
      score += 1;
   }
   return score;
}



const score = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer,whereTravelAnswer);
const message = 'You Answered' + score + '/5 right!';

quizResult.textContent = message;

 if(score <= 2) {
     quizResult.classList.add('bad');
     quizResult.classList.remove('good');
 }
 else {
     quizResult.classList.add('good');
     quizResult.classList.remove('bad');
 }
});

const test = QUnit.test;

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

test('all answers are wrong is 0', function(assert) {
   //Arrange
   const whereFromAnswer = 'USA';
   const planetAnswer = 'Moon';
   const fruitAnswer = 'Apple';
   const tryAnswer = 'Horseriding';
   const whereTravelAnswer = 'Australia';
   const expected = 0;

   //Act
   const testScore = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer);
   
   //Assert
   assert.equal(expected, testScore);
});

test('all asnswers are right is 5', function(assert) {
    //Arrange
    const whereFromAnswer = 'russia';
    const planetAnswer = 'mars';
    const fruitAnswer = 'orange';
    const tryAnswer = 'skydiving';
    const whereTravelAnswer = 'machu pikchu';
    const expected = 5;

    //Act 
    const testScore = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer);

    //Assert
    assert.equal(expected, testScore);   
});
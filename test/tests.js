const test = QUnit.test;

function scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer) {
   whereFromAnswer = whereFromAnswer.toLowerCase();
   planetAnswer = planetAnswer.toLowerCase();
   fruitAnswer = fruitAnswer.toLowerCase();
   tryAnswer = tryAnswer.toLowerCase();
   whereTravelAnswer = whereTravelAnswer.toLowerCase();

   let score = 0;
   if(whereFromAnswer === 'Russia') {
      score += 1;
   }
   if(planetAnswer === 'Mars') {
      score += 1;
   }
   if(fruitAnswer === 'Orange') {
      score += 1;
   }
   if(tryAnswer === 'Skydiving') {
      score += 1;
   }
   if(whereTravelAnswer === 'Machu Pikchu') {
      score += 1;
   }
   return score;
}

test('all asnswers are right is 5', function(assert) {
    //Arrange
    const whereFromAnswer = 'Russia';
    const planetAnswer = 'Mars';
    const fruitAnswer = 'Orange';
    const tryAnswer = 'Skydiving';
    const whereTravelAnswer = 'Machu Pikchu';
    const expected = 5;

    //Act 
    const score = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer);

    //Assert
    assert.equal(score, expected);   
});

test('all answers are wrong is 0', function(assert) {
    //Arrange
    const whereFromAnswer = 'USA';
    const planetAnswer = 'Moon';
    const fruitAnswer = 'Apple';
    const tryAnswer = 'Horseriding';
    const whereTravelAnswer = 'Australia';
    const expected = 0;

    //Act
    const score = scoreAnswers(whereFromAnswer, planetAnswer, fruitAnswer, tryAnswer, whereTravelAnswer);
    
    //Assert
    assert.equal(score, expected);
});
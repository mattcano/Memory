//timer function
$('button').on('click', function(){
  var elapsedTime = 0;
  setInterval(function(){
    var totalTime = elapsedTime + 1;
    var seconds = Math.floor(totalTime);
    $('#timer').html(elapsedTime);
  }, 1000);
});



function randomLetter(){
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rand = _.random(0, alphabet.length-1);
  return alphabet[rand];
};

function board(size){
  var uniqueLetters = Math.floor(size/2);
  size = uniqueLetters * 2;
  var lettersUsed = []

  _(uniqueLetters).times( function(){
    lettersUsed.push(randomLetter());
  });

  return lettersUsed;

}

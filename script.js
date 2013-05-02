//timer function
$(document).ready(function(){
  var elapsedTime = 0;
  $('#startbutton').on('click', function(){
  window.setInterval(timerFunction, 1000);
    function timerFunction(){
      elapsedTime = elapsedTime + 1;
      $('#timer').html(elapsedTime);
    };
  });
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

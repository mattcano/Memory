function randomLetter(){
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rand = _.random(0, alphabet.length-1);
  return alphabet[rand];
};

function board(size){
  var uniqueLetters = Math.floor(size/2);
  size = uniqueLetters * 2;
  var lettersUsed = [];
  var boardLetters = [];
  var boardMap = {};

  _(uniqueLetters).times( function(){
    lettersUsed.push(randomLetter());
  });

  _.each(lettersUsed, function (letter) {
    boardLetters.push(letter);
    boardLetters.push(letter);
  });

  boardLetters = _.shuffle(boardLetters);

  for (var i = 1; i < size + 1; i++ ) {
    boardMap[i] = boardLetters[i-1];
  };
  return boardMap;

  function loadBoard(){
    for (var i = 1; i < size + 1; i++){
      $('.card').html('<div class="span4 card">' + boardMap[i] '</div>')
    };
  }
}
  
  $('.card').flip({
    
  })

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


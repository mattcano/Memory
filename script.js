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
}

// function printBoard(num){
//   var cardHid = "<div class='span2 card'><span class='letter'>#</span></div>"
  
//   _(num).times( function(){
//     $("#gameBoard").append(cardHid);
//   });
// }


//timer function
$(document).ready(function(){

  var size = 0;
  var boardObj = {};

  var elapsedTime = 0;
  $('#startbutton').on('click', function(){
  window.setInterval(timerFunction, 1000);
    function timerFunction(){
      elapsedTime = elapsedTime + 1;
      $('#timer').html(elapsedTime);
    };
    
    size = 10;
    boardObj = board(size);
    

    _(size).times( function(i){
      var counter = i+1;
      var cardHid = "<div id='" + counter + "'class='span2 card'><span class='letter'>#</span></div>"
      $("#gameBoard").append(cardHid);
      $('#' + counter).on('click', function () {
        console.log(counter);
        $(this).flip({
          direction: 'bt',
          content: "<span class='letter'>" + boardObj[counter] + "</span>",
          color: '#f4da69',
        });

        
      });

    });

  });

  // $('.card').on('click'), function () {
  //   $(this).flip({
  //     direction: 'tb'
  //   });
  // };



});


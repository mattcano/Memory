//timer function
$('button').on('click', function(){
  var elapsedTime = 0;
  setInterval(function(){
    var totalTime = elapsedTime + 1;
    var seconds = Math.floor(totalTime);
    $('#timer').html(elapsedTime);
  }, 1000);
});


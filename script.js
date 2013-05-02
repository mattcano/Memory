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

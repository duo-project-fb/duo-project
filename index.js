$(document).ready(function() {
  var rocket = $('.rocket');
  $('#fire').click(function() {
      var Bottom = parseInt(rocket.css('bottom'));
      rocket.css('bottom', (Bottom + 10) + 'px');
  });
  $('#break').click(function() {
      var Bottom = parseInt(rocket.css('bottom'));
      rocket.css('bottom', (Bottom - 10) + 'px');
  });
  $('#rigth').click(function() {
    var Bottom = parseInt(rocket.css('right'));
    if(Bottom<=0){
     Bottom=0
     rocket.css('right', (Bottom - 10) + 'px');
    }else {
    rocket.css('right', (Bottom - 10) + 'px');
    }
});
$('#left').click(function() {
  var Bottom = parseInt(rocket.css('right'));
  rocket.css('right', (Bottom + 10) + 'px');
});
});

  
$(document).ready(function() {
  var rocket = $('.rocket');
  $('#fire').click(function() {
      var Bottom = parseInt(rocket.css('bottom'));
      console.log(Bottom);
      if(Bottom>=610){
        Bottom=610
        rocket.css('bottom', (Bottom + 10) + 'px');
      }else{
        rocket.css('bottom', (Bottom + 10) + 'px');
      }
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
  console.log(Bottom)
  if(Bottom>=635){
    Bottom=635
    rocket.css('right', (Bottom + 10) + 'px');
  }else{
  rocket.css('right', (Bottom + 10) + 'px');
}
 });
});
$(document).ready(function() {
  
  var rocket = $('.rocket');
  var spots = $('.spot, .spot1, .spot2, .spot3, .spot4, .spot5, .spot6');

  
  var rocketStartPosition = {
      left: rocket.css('left'),
      bottom: rocket.css('bottom')
  };


  setInterval(function() {
      checkCollisions();
  }, 100); 

  function checkCollisions() {
      var rocketPosition = rocket.position();

      
      spots.each(function() {
          var spotPosition = $(this).position();
          
          
          if (
              rocketPosition.left < spotPosition.left + $(this).width() &&
              rocketPosition.left + rocket.width() > spotPosition.left &&
              rocketPosition.top < spotPosition.top + $(this).height() &&
              rocketPosition.top + rocket.height() > spotPosition.top
          ) {
              
              resetRocketPosition();
          }
      });
  }

  
  function resetRocketPosition() {
      rocket.css({
          'left': rocketStartPosition.left,
          'bottom': rocketStartPosition.bottom
      });
  }

  
});


  
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
 resetRocketPosition()
 console.log(spots);
});
var rocketStartPosition = {
  left: rocket.css('left'),
  bottom: rocket.css('bottom')
};
  

var Bottom = parseInt(rocket.css('bottom'));
  var spots = parseInt(spot6.css('spot6'))

  setInterval(function () {
      crushCheck();
  }, 100);

  function resetRocketPosition() {
    var rocketPosition =Bottom
 
          spots.forEach(function () {
              var spotPosition = spots.position();
    
              if (rocketPosition ===spotPosition ) 
              {    Bottom = 0
                console.log('hh')}
          });
   
}






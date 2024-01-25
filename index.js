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
// var arr=["⚪",
//   "⚪",
//   "⚪",
//   "⚪",
//   "⚪",
//   "⚪",
//   "⚪",
//   "⚪","⚪","⚪","⚪"]
//   var fedi=document.getElementById("space")
// for(var i=0;i<arr.length;i++){
//   var obstacle=document.createElement("h1")
//   obstacle.textContent=arr[i]
//   singleItem
// }

  
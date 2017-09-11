$(document).ready(function(){
  
  setTimeout(function(){
   $('#aparecer').show();// or fade, css display however you'd like.
}, 8000);
  
 
$('.vehiculo').click(function(){
    $(this).toggleClass("select");
  return false;
});  
  
  
  
});
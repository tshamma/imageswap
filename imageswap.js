$(document).ready(function(){

  $(".before").click(function(){
  	$(".before").fadeOut();
  	$(".after").fadeIn();
  });

$(".after").click(function(){
 $(".before").fadeIn();
 $(".after").fadeOut();
});
});

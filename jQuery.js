$(document).ready(function(){
  $("#start").click(function(){
    $("#ms_von_cuten").animate({left: '100px'}, 5000);
    $("#ms_von_cuten").animate({fontSize: '3em'}, 5000);
  });

  $("#stop").click(function(){
    $("div").stop();
  });

  $("#stop2").click(function(){
    $("div").stop();
  });

  $("#stop3").click(function(){
    $("div").stop();
  });

  $("h1").css("color", "red")
  .slideup(2000)
  .sliddown(2000);

});
$(document).ready(function(){
  $('.header').click("slow", function(){
    $('.topnav').hide();
      alert("The paragraph is now hidden")
  });

  $('.header').click(function(){
    $('.topnav').hide();
  });

  $("#start").click(function(){
    $("#ani").animate({left: '100px'}, 5000);
    $("#ani").animate({fontSize: '3em'}, 5000);
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

  $("#h2").css("color", "red")
  .slideup(2000)
  .sliddown(2000);

});
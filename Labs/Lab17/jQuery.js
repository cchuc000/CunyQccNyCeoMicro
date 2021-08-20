$(document).ready(function(){
  $('.header').click("slow", function(){
    $('.topnav').hide();
      alert("The paragraph is now hidden")
  });

  $('.header').click(function(){
    $('.topnav').hide();
  });

  $("#an").click(function() {
    //#("#ani").animate({
      //left: '+=5px',
      //opacity:'-=0.05',
      //height: '+=10px',
      //width: '+=50px'
      var a=$("#ani");
      a.animate({height: '+=10px', opacity:'0.1'}, 'slow');
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
$(document).ready(function(){
  $('.header').click("slow", function(){
    $('.topnav').hide();
      alert("The paragraph is now hidden")
  });

  $('.header').click(function(){
    $('.topnav').hide();
  });

});
function sty2(){
  /* We are going to create buttons to change css style sheets*/
  document.getElementsByTagName("link")[0].setAttribute("href","style2.css");

}

function sty3(){
  /* We are going to create buttons to change css style sheets*/
  document.getElementsByTagName("link")[0].setAttribute("href","style3.css");

}

function sty1(){
  /* We are going to create buttons to change css style sheets*/
  document.getElementsByTagName("link")[0].setAttribute("href","style1.css");

}

function sty(){
  /* We are going to create buttons to change css style sheets*/
  document.getElementsByTagName("link")[0].setAttribute("href","style.css");

}

function infoUser() {
  //Get First Name
  let firstName = document.getElementById("fname").value;
  //Get Last Name
  let lastName = document.getElementById("lname").value;
  //Get Birthday
  let birthDay = document.getElementById("bday").value;
  //Get Eye Color
  let eyeColor = document.getElementById("ecolor").value;
  //Get Superpower
  let superPower = document.getElementById("spower").value;

  let text = "Your name is " + firstName + " " + lastName + ", you were born on " + birthDay + ". Your eye color is " + eyeColor + " and your super power is " + superPower;

  alert(text);

}
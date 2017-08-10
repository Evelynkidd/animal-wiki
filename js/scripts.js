$(document).ready(function(){
  var animal = prompt("Pick One: Turtles, Snakes, Elephants");

  if (animal === "Turtles") {
    $(".animal1").show();
  }
  else if (animal === "Snakes") {
    $(".animal2").show();
  }
  else if (animal === "Elephants") {
    $(".animal3").show();
  }
  else {
    $("p").show();
  }
});

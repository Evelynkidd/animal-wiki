$(document).ready(function(){
  var height = parseInt(prompt("What is your height in feet?"));

    if (height >= 5) {
      $("#ride5").show();
    }
     else if (height >= 4) {
       $("#ride4").show();
       $("#ride5").show();
     }
     else if (height >= 3) {
       $("#ride3").show();
       $("#ride4").show();
       $("#ride5").show();
     }
     else if (height >= 2) {
       $("#ride2").show();
       $("#ride3").show();
       $("#ride4").show();
       $("#ride5").show();
     }
     else if (height >= 1) {
       $("#ride1").show();
       $("#ride2").show();
       $("#ride3").show();
       $("#ride4").show();
       $("#ride5").show();
     }

    else {
      alert("Try again");
    };

});

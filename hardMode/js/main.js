var background = document.querySelector("body");

var changeColor = function() {
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hexhours = hours.toString(16);
  hexmins = minutes.toString(16);
  hexsecs = seconds.toString(16);

  var clock = document.getElementById("time");
  var clockTime = hexhours + hexmins + hexsecs
  clock.innerHTML = clockTime;
  background.style.backgroundColor = "#" + hexhours + hexmins + hexsecs;
}



window.setInterval(changeColor, 1000);

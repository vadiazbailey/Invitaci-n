"use strict"

/*var countDownDate = new Date(1645227900000).getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with class="contador"
  document.querySelector(".contador").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".contador").innerHTML =
    `<video height="300px" width="500px" controls=1>
      <source src="musica/Es hoy.mp4" type="video/mp4">
    </video>`;
  }
}, 1000);*/


document.addEventListener('DOMContentLoaded', () => {

  var flipdown = new FlipDown(1645227900,{
    headings:["dias", "horas", "minutos", "segundos"]})

    // Start the countdown
    flipdown.start()

    // Do something when the countdown ends
    flipdown.ifEnded(() => {
      document.querySelector("#flipdown").innerHTML = '';
      document.querySelector("#video").innerHTML = 
      `<video height="180px" width="320px" controls=1 style="margin-top:-55px; margin-bottom:-20px;">
        <source src="musica/Es hoy.mp4" type="video/mp4">
      </video>`;
    })})
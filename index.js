import * as bootstrap from 'bootstrap';


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
      }
}, 1000);
var y = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
            clearInterval(y);
            document.getElementById("demo1").innerHTML = "EXPIRED";
      }
}, 1000);





var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
      breakpoints: {
            390: {
                  slidesPerView: 2,
                  spaceBetween: 20,
            },
            768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
            },
            1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                  slidesPerGroup: 4,
            },
      },
      navigation: {
            nextEl: ".swiper-position-left",
            prevEl: ".swiper-position-right",
      },
});

const changeColor = () => {
      console.log('1')
}
document.querySelector("#red").addEventListener("onclick", changeColor)


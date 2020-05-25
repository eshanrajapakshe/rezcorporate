
$(document).ready(function () {
      $(this).scrollTop(0);
});

// NAV BAR

$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on('scroll', function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})

// Navbar hide on scroll down
$(document).ready(function () {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                  document.getElementById("navbar").style.top = "0";
            } else {
                  document.getElementById("navbar").style.top = "-60px";
            }
            prevScrollpos = currentScrollPos;
      }
});

// SCROLL


// HOME PAGE WORD CHANGING

$(function () {
      count = -1;
      initTextOne = "Let's talk your problem";
      initTextTwo = "We know technology can be very challenging with the rapid changes happening globlally, leverage on us, let us take care of your technology problem.";

      wordsTopArray = [
            "You want better",
            "Are you looking at delivering services to Customers in a",
            "With businesses cutting back, do you need to develop a",
            "You want to improve your operations by having one",
            "You want to"
      ];

      wordsArray = [
            "Business Outcomes?",
            "New & Improved manner?",
            "Low-cost Business Model?",
            "Unified IT Platform?",
            "Modernize your IT?"
      ];

      wordsSubArray = [
            "We’ll help you harnessing the power of data, technology & innovation to meet your goals.",
            "We’re here to help",
            "We’ll work with you",
            "We can help",
            "Don’t know where to start? Talk to us."
      ];
      
      $("#wordchange").text(initTextOne).delay(500);
      $("#wordchange-sub").text(initTextTwo).delay(500);

      setInterval(function () {
            count++;
            $("#wordchange-sub-top").fadeOut(1000, function () {
                  $(this).text(wordsTopArray[count % wordsTopArray.length]).fadeIn(600);
            });
            $("#wordchange").fadeOut(1000, function () {
                  $(this).text(wordsArray[count % wordsArray.length]).slideDown(1000);
            });
            $("#wordchange-sub").fadeOut(1000, function () {
                  $(this).text(wordsSubArray[count % wordsSubArray.length]).fadeIn(600);
            });

      }, 8000); // set interval time
});


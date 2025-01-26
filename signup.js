$(document).ready(function () {
    // Fade-in effect on the container
    $(".signup-container").hide().fadeIn(1000);
  
    // Form submission handling
    $("#signupForm").submit(function (e) {
      e.preventDefault();
  
      const email = $("#email").val();
      const password = $("#password").val();
  
      // Simulate storing credentials (no backend)
      alert(`Account created for ${email}!`);
      window.location.href = "login.html";
    });
  
    // Animate the button on hover
    $("button").hover(
      function () {
        $(this).animate({ opacity: 0.8 }, 200);
      },
      function () {
        $(this).animate({ opacity: 1 }, 200);
      }
    );
  });
  
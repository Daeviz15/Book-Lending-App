$(document).ready(function () {
  $('.signup-container').hide().fadeIn(1000);

  $('#signupForm').submit(function (e) {
    e.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();
    const name = $('#name').val();


    if (!email || !password || !name) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userName', name);


    alert(`Account created for ${email}!`);
    setTimeout(function () {
      window.location.href = 'login.html';
    }, 1000);
  });

  $('button').hover(
    function () {
      $(this).animate({ opacity: 0.8 }, 200);
    },
    function () {
      $(this).animate({ opacity: 1 }, 200);
    },
  );
});

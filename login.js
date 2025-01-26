document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Dummy authentication
    if (email === 'user@example.com' && password === 'password123') {
      $('.login-container').fadeOut(300, function () {
        alert('Login successful!');
        window.location.href = 'index.html';
      });
    } else {
      $('.submit-btn')
        .text('Invalid credentials!')
        .addClass('btn-danger')
        .removeClass('btn-primary');
      setTimeout(function () {
        $('.submit-btn')
          .text('Login')
          .addClass('btn-primary')
          .removeClass('btn-danger');
      }, 2000);
    }
  });
  

  function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.textContent = '🙈';
    } else {
      passwordField.type = 'password';
      toggleIcon.textContent = '👁️';
    }
  }

  function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "nur"; //! Replace with actual password
    const invalidMessage = document.getElementById('invalidMessage');
    
    if (password === correctPassword) {
      window.location.href = "../index.html";
    } else {
      invalidMessage.style.display = 'block';
      setTimeout(() => {
        invalidMessage.style.display = 'none';
      }, 2000);
    }
  }

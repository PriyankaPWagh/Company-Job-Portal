// Signup
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const user = document.getElementById('signupUser').value;
      const pass = document.getElementById('signupPass').value;
  
      localStorage.setItem('hirehubUser', user);
      localStorage.setItem('hirehubPass', pass);
  
      document.getElementById('signupStatus').textContent = 'Signup successful! Redirecting...';
      setTimeout(() => window.location.href = 'login.html', 2000);
    });
  }
  
  // Login
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const user = document.getElementById('loginUser').value;
      const pass = document.getElementById('loginPass').value;
  
      const storedUser = localStorage.getItem('hirehubUser');
      const storedPass = localStorage.getItem('hirehubPass');
  
      if (user === storedUser && pass === storedPass) {
        document.getElementById('loginStatus').textContent = 'Login successful!';
        setTimeout(() => window.location.href = 'index.html', 1500);
      } else {
        document.getElementById('loginStatus').textContent = 'Invalid credentials!';
      }
    });
  }
  
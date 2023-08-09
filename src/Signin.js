document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get the values of the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Add your authentication logic here (e.g., send the data to a server for verification)
  
    // For demonstration purposes, just display the entered credentials
    alert(`Username: ${username}\nPassword: ${password}`);
  });
  

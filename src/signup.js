document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signup-form");
  
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form input values
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const phoneNumber = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Add your form submission logic here
      // ...
  
      // Clear form fields after successful submission (optional)
      signUpForm.reset();
    });
  });

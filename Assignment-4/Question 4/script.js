function validatePassword() {
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
  
    // Check if passwords match
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // Check password length and format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one digit, one uppercase letter, and one lowercase letter");
      return false;
    }
  
    // All validations passed
    return true;
  }
  
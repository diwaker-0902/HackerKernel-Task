// this function validates the form fields before submission
function validateForm() {
  // Get the values entered by the user
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Regular expression to validate basic email format
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  // Regular expression to allow only 10-digit mobile numbers
  const mobileRegex = /^[0-9]{10}$/;

  // Check if the email matches the pattern
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevents form submission
  }

  // Check if the mobile number is exactly 10 digits
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false; // Prevent form submission
  }

  // If both validations pass, allow form to submit
  return true;
}



/*
Email regex explanation:
- ^ Starting of the string
- [^@]+ One or more characters except '@'
- Followed by '@'
- Then one or more characters except '@'
- Followed by a dot '.'
- Ends with one or more characters except '@'

Mobile regex explanation:
- ^ Starting of the string
- [0-9]{10} Exactly 10 digits from 0 to 9
- $ End of the string
*/

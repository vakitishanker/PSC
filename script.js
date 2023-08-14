const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

// Function to calculate password strength
function checkPasswordStrength(password) {
  const minLength = 8;
  const minUpperCase = 1;
  const minLowerCase = 1;
  const minNumbers = 1;
  const minSpecialChars = 1;

  const upperCaseRegex = /[A-Z]/g;
  const lowerCaseRegex = /[a-z]/g;
  const numbersRegex = /[0-9]/g;
  const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;

  let strength = 0;
  if (password.length >= minLength) strength++;
  if (password.match(upperCaseRegex)) strength++;
  if (password.match(lowerCaseRegex)) strength++;
  if (password.match(numbersRegex)) strength++;
  if (password.match(specialCharsRegex)) strength++;

  return strength;
}

// Function to update password strength feedback
function updatePasswordStrength() {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);

  let feedback = '';
  switch (strength) {
    case 0:
    case 1:
      feedback = 'Weak';
      break;
    case 2:
    case 3:
      feedback = 'Moderate';
      break;
    case 4:
    case 5:
      feedback = 'Strong';
      break;
  }

  passwordStrength.textContent = 'Strength: ' + feedback;
}

// Event listener for password input
passwordInput.addEventListener('input', updatePasswordStrength);

// check if the library is being loaded
console.log("passwordCheck.js is loaded");


// adds event listeners to the inputs to check if they are valid
const inputs = document.querySelectorAll("input, select, textarea");
inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.remove('noError');
      input.classList.add("error");
    },
    false
  );
});

// updates the style of the input based on the validity of the input
function validate_password() {
  var pass = document.getElementById('signup-password').value;
  var confirm_pass = document.getElementById('signup-passwordConfirm').value;
  if (pass != confirm_pass) {
      document.getElementById('wrong_pass_alert').style.color = 'red';
      document.getElementById('wrong_pass_alert').innerHTML
          = 'Please use the same password';
      document.getElementById('signup-submit').disabled = true;
      document.getElementById('signup-submit').style.opacity = (0.4);
  } else {
      document.getElementById('wrong_pass_alert').style.color = 'green';
      document.getElementById('wrong_pass_alert').innerHTML =
          'Password Matched';
      document.getElementById('signup-submit').disabled = false;
      document.getElementById('signup-submit').style.opacity = (1);
  }
}

// reset the highlighting of the inputs
function reset_highlighting() {
    inputs.forEach(input => {
        input.classList.remove("error");
      });
}
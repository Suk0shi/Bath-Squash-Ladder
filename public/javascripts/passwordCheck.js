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


function validate_password() {
 
  var pass = document.getElementById('password').value;
  var confirm_pass = document.getElementById('passwordConfirm').value;
  if (pass != confirm_pass) {
      document.getElementById('wrong_pass_alert').style.color = 'red';
      document.getElementById('wrong_pass_alert').innerHTML
          = 'Please use the same password';
      document.getElementById('submit').disabled = true;
      document.getElementById('submit').style.opacity = (0.4);
  } else {
      document.getElementById('wrong_pass_alert').style.color = 'green';
      document.getElementById('wrong_pass_alert').innerHTML =
          'Password Matched';
      document.getElementById('submit').disabled = false;
      document.getElementById('submit').style.opacity = (1);
  }
}

function reset_highlighting() {
    inputs.forEach(input => {
        input.classList.remove("error");
      });
}
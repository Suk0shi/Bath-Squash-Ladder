// signup
const signupForm = document.querySelector('#signup-form');

// add event listerner to the form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    // const email = signupForm['signup-email'].value;
    const email = document.getElementById('signup-email').value;
    const password = signupForm['signup-password'].value;
    // const password = document.getElementById('signup-password').value;

    console.log(email, password);

    // sign up the user to firebase
    // auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //     // close the signup modal & reset the form
    //     const modal = document.querySelector('#modal-signup');
    //     M.Modal.getInstance(modal).close();
    //     signupForm.reset();
    // });
});

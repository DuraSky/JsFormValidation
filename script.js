const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password ~ span.error");
const passwordInfo = document.querySelector("#password ~ span.info");
const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPassword ~ span.error");
const region = document.getElementById("region");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip ~ span.error");
const subButton = document.getElementById("submit");

window.onload = function(){
    confirmPassword.disabled = true;
}



email.addEventListener("input", ()=>{
    if(email.validity.valid){
        emailError.innerHTML = "";
    }else{
        showEmailError();
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
      emailError.innerHTML = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.innerHTML = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      emailError.innerHTML = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}

password.addEventListener("input", ()=>{
        if(password.validity.valid){
            passwordError.innerHTML = "";
            passwordInfo.innerHTML = ""; 
            confirmPassword.disabled = false;
        }else{
            confirmPassword.disabled = true;
            passwordInfo.innerHTML = "You need at least 8 charactes, 1 capital and 1 number and 1 lower case"; 
            showPasswordError();
        }
})

function showPasswordError(){
     if (password.validity.valueMissing) {
        passwordError.innerHTML = "You need to enter password";
    } else if (password.validity.tooShort) {
        passwordError.innerHTML = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
    else if(password.validity.patternMismatch){
        passwordError.innerHTML = "Your password does not meet the conditions"
    }
}

confirmPassword.addEventListener("input", () => {
    console.log(password.value)
    if (password.value === confirmPassword.value) {
        confirmPasswordError.innerHTML = "";
        confirmPassword.setCustomValidity(""); // Clear custom validity
        passwordError.innerHTML = ""; // Clear the error message for password
    } else {
        confirmPasswordError.innerHTML = "Values do not match";
        confirmPassword.setCustomValidity("Values do not match"); // Set custom validity
    }
});


zip.addEventListener("input", ()=>{
    if(zip.validity.valid){
        zipError.innerHTML = "";
    }else{
        showZipError();
    }
});

function showZipError(){
    if(zip.validity.patternMismatch){
        zipError.innerHTML ="ZIP must be in pattern 00 000"
    }
}

form.addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
        // If the form is not valid, prevent form submission
        event.preventDefault();
    }else{
        alert("Good job, highfive!")
    }
});


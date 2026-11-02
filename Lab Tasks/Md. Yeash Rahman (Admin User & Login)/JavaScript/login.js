
// Login Form Validation

let username = document.getElementById("username");
let password = document.getElementById("password");
let category = document.getElementById("userCategory");

let loginForm = document.getElementById("loginForm");


// Username or Email Validation
function validateUsername() {

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (username.value.trim() == "") {

        document.getElementById("usernameError").innerHTML =
            "Username or Email cannot be empty.";

        return false;
    }

    else if (username.value.indexOf("@") != -1 &&
             !emailPattern.test(username.value.trim())) {

        document.getElementById("usernameError").innerHTML =
            "Please enter a valid email address.";

        return false;
    }

    else {

        document.getElementById("usernameError").innerHTML = "";

        return true;
    }
}


// Password Validation
function validatePassword() {

    if (password.value == "") {

        document.getElementById("passwordError").innerHTML =
            "Password cannot be empty.";

        return false;
    }

    else if (password.value.length < 6) {

        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 6 characters.";

        return false;
    }

    else {

        document.getElementById("passwordError").innerHTML = "";

        return true;
    }
}


// User Category Validation
function validateCategory() {

    if (category.value == "") {

        document.getElementById("categoryError").innerHTML =
            "Please select a user category.";

        return false;
    }

    else {

        document.getElementById("categoryError").innerHTML = "";

        return true;
    }
}


// Keyup Events
username.addEventListener("keyup", validateUsername);

password.addEventListener("keyup", validatePassword);


// Change Event
category.addEventListener("change", validateCategory);


// Form Submit Event
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let result = true;

    if (!validateUsername()) {
        result = false;
    }

    if (!validatePassword()) {
        result = false;
    }

    if (!validateCategory()) {
        result = false;
    }

    if (result == true) {

        document.getElementById("loginMessage").style.color = "green";

        document.getElementById("loginMessage").innerHTML =
            "Login validation successful!";

    }

    else {

        document.getElementById("loginMessage").style.color = "red";

        document.getElementById("loginMessage").innerHTML =
            "Please correct the errors above.";

    }

});


// Reset Event
loginForm.addEventListener("reset", function() {

    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("categoryError").innerHTML = "";
    document.getElementById("loginMessage").innerHTML = "";

});

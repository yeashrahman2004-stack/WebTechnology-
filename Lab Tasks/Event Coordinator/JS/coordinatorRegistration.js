
function nameCheck() {
    let nametext = document.getElementById("fullName").value.trim();

    if (nametext == "") {
        document.getElementById("fullNameError").innerHTML = "Please enter your full name.";
        return false;
    }
    else if (nametext.length < 5) {
        document.getElementById("fullNameError").innerHTML = "Name must contain at least 5 characters.";
        return false;
    }
    else {
        document.getElementById("fullNameError").innerHTML = "";
        return true;
    }
}


function studentIdCheck() {
    let studentId = document.getElementById("studentId").value.trim();

    if (studentId == "") {
        document.getElementById("studentIdError").innerHTML = "Please enter your Student ID.";
        return false;
    }
    else if (!/^\d{2}-\d{5}-\d{2}$/.test(studentId)) {
        document.getElementById("studentIdError").innerHTML = "Student ID must follow XX-XXXXX-XX format.";
        return false;
    }
    else {
        document.getElementById("studentIdError").innerHTML = "";
        return true;
    }
}


function emailCheck() {
    let emailtext = document.getElementById("email").value.trim();

    if (emailtext == "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address.";
        return false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailtext)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        return false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}


function phoneCheck() {
    let phone = document.getElementById("phone").value.trim();

    if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
        return false;
    }
    else if (!/^\d{10,15}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Phone number must contain 10-15 digits.";
        return false;
    }
    else {
        document.getElementById("phoneError").innerHTML = "";
        return true;
    }
}


function departmentCheck() {
    let department = document.getElementById("department").value;

    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Please select your department.";
        return false;
    }
    else {
        document.getElementById("departmentError").innerHTML = "";
        return true;
    }
}


function organizationCheck() {
    let organization = document.getElementById("organization").value.trim();

    if (organization == "") {
        document.getElementById("organizationError").innerHTML = "Please enter your club or organization name.";
        return false;
    }
    else {
        document.getElementById("organizationError").innerHTML = "";
        return true;
    }
}


function positionCheck() {
    let position = document.getElementById("position").value;

    if (position == "") {
        document.getElementById("positionError").innerHTML = "Please select your role.";
        return false;
    }
    else {
        document.getElementById("positionError").innerHTML = "";
        return true;
    }
}


function passwordCheck() {
    let password = document.getElementById("password").value;

    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password.";
        return false;
    }
    else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 8 characters.";
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
        return true;
    }
}


function confirmPasswordCheck() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword == "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password.";
        return false;
    }
    else if (password != confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        return false;
    }
    else {
        document.getElementById("confirmPasswordError").innerHTML = "";
        return true;
    }
}


function confirmInfoCheck() {
    let confirmInfo = document.getElementById("confirmInfo").checked;

    if (confirmInfo == false) {
        document.getElementById("confirmInfoError").innerHTML = "Please confirm that your information is accurate.";
        return false;
    }
    else {
        document.getElementById("confirmInfoError").innerHTML = "";
        return true;
    }
}


// Main validation function
function myVal() {

    let a = nameCheck();
    let b = studentIdCheck();
    let c = emailCheck();
    let d = phoneCheck();
    let e = departmentCheck();
    let f = organizationCheck();
    let g = positionCheck();
    let h = passwordCheck();
    let i = confirmPasswordCheck();
    let j = confirmInfoCheck();

    if (a == true && b == true && c == true && d == true &&
        e == true && f == true && g == true && h == true &&
        i == true && j == true) {

        return true;
    }
    else {
        return false;
    }
}

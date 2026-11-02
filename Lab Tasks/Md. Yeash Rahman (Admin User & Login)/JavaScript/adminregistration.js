
// Admin Registration Form Validation

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");

let uniId = document.getElementById("uni_id");
let dept = document.getElementById("dept");
let role = document.getElementById("role");

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");

let adminId = document.getElementById("admin_id");

let adminForm = document.getElementById("adminForm");


// Name Validation
function validateName() {

    let pattern = /^[A-Za-z ]+$/;

    if (name.value.trim() == "") {
        document.getElementById("nameError").innerHTML =
            "Name cannot be empty.";
        return false;
    }
    else if (!pattern.test(name.value.trim())) {
        document.getElementById("nameError").innerHTML =
            "Only English letters and spaces are allowed.";
        return false;
    }
    else {
        document.getElementById("nameError").innerHTML = "";
        return true;
    }
}


// Email Validation
function validateEmail() {

    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() == "") {
        document.getElementById("emailError").innerHTML =
            "Email cannot be empty.";
        return false;
    }
    else if (!pattern.test(email.value.trim())) {
        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address.";
        return false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}


// Phone Validation
function validatePhone() {

    let pattern = /^01[3-9][0-9]{8}$/;

    if (phone.value.trim() == "") {
        document.getElementById("phoneError").innerHTML =
            "Phone number cannot be empty.";
        return false;
    }
    else if (!pattern.test(phone.value.trim())) {
        document.getElementById("phoneError").innerHTML =
            "Enter a valid 11 digit Bangladesh phone number.";
        return false;
    }
    else {
        document.getElementById("phoneError").innerHTML = "";
        return true;
    }
}


// Age Validation
function validateAge() {

    if (age.value == "") {
        document.getElementById("ageError").innerHTML =
            "Age cannot be empty.";
        return false;
    }
    else if (Number(age.value) < 18 || Number(age.value) > 60) {
        document.getElementById("ageError").innerHTML =
            "Age must be between 18 and 60.";
        return false;
    }
    else {
        document.getElementById("ageError").innerHTML = "";
        return true;
    }
}


// Gender Validation
function validateGender() {

    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        document.getElementById("genderError").innerHTML =
            "Please select your gender.";
        return false;
    }
    else {
        document.getElementById("genderError").innerHTML = "";
        return true;
    }
}


// University ID Validation
function validateUniId() {

    let pattern = /^[0-9]{4}$/;

    if (uniId.value.trim() == "") {
        document.getElementById("uniIdError").innerHTML =
            "University ID cannot be empty.";
        return false;
    }
    else if (!pattern.test(uniId.value.trim())) {
        document.getElementById("uniIdError").innerHTML =
            "University ID must contain exactly 4 digits.";
        return false;
    }
    else {
        document.getElementById("uniIdError").innerHTML = "";
        return true;
    }
}


// Department Validation
function validateDept() {

    if (dept.value == "") {
        document.getElementById("deptError").innerHTML =
            "Please select your department.";
        return false;
    }
    else {
        document.getElementById("deptError").innerHTML = "";
        return true;
    }
}


// Role Validation
function validateRole() {

    if (role.value == "") {
        document.getElementById("roleError").innerHTML =
            "Please select your role.";
        return false;
    }
    else {
        document.getElementById("roleError").innerHTML = "";
        return true;
    }
}


// Password Validation
function validatePassword() {
    const password = document.getElementById("password").value;

    const passwordPattern = /^[0-9@#]+$/;

    if (password === "") {
        document.getElementById("passwordError").innerHTML =
            "Password is required";
        return false;
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password can contain only numbers, @ and #";
        return false;
    }
    else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 6 characters";
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
        return true;
    }
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML =
            "Please confirm your password";
        return false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML =
            "Passwords do not match";
        return false;
    }
    else {
        document.getElementById("confirmPasswordError").innerHTML = "";
        return true;
    }
}


// Admin ID Validation
function validateAdminId() {

    let pattern = /^[0-9]{4}$/;

    if (adminId.value.trim() == "") {
        document.getElementById("adminIdError").innerHTML =
            "Admin ID cannot be empty.";
        return false;
    }
    else if (!pattern.test(adminId.value.trim())) {
        document.getElementById("adminIdError").innerHTML =
            "Admin ID must contain exactly 4 digits.";
        return false;
    }
    else {
        document.getElementById("adminIdError").innerHTML = "";
        return true;
    }
}


// Terms Validation
function validateTerms() {

    if (document.getElementById("terms").checked == false) {
        document.getElementById("termsError").innerHTML =
            "Please accept Terms and Conditions.";
        return false;
    }
    else {
        document.getElementById("termsError").innerHTML = "";
        return true;
    }
}


// Keyup Events
name.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
age.addEventListener("keyup", validateAge);
uniId.addEventListener("keyup", validateUniId);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validateConfirmPassword);
adminId.addEventListener("keyup", validateAdminId);


// Change Events
document.getElementById("male").addEventListener("change", validateGender);
document.getElementById("female").addEventListener("change", validateGender);

dept.addEventListener("change", validateDept);
role.addEventListener("change", validateRole);

document.getElementById("terms").addEventListener("change", validateTerms);


// Recheck Confirm Password when Password changes
password.addEventListener("keyup", function() {

    if (confirmPassword.value != "") {
        validateConfirmPassword();
    }

});


// Form Submit Event
adminForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let result = true;

    if (!validateName()) result = false;
    if (!validateEmail()) result = false;
    if (!validatePhone()) result = false;
    if (!validateAge()) result = false;
    if (!validateGender()) result = false;
    if (!validateUniId()) result = false;
    if (!validateDept()) result = false;
    if (!validateRole()) result = false;
    if (!validatePassword()) result = false;
    if (!validateConfirmPassword()) result = false;
    if (!validateAdminId()) result = false;
    if (!validateTerms()) result = false;

    if (result == true) {

        document.getElementById("formMessage").style.color = "green";

        document.getElementById("formMessage").innerHTML =
            "Admin Registration Successful!";

    }
    else {

        document.getElementById("formMessage").style.color = "red";

        document.getElementById("formMessage").innerHTML =
            "Please correct the errors above.";

    }

});


// Reset Event
adminForm.addEventListener("reset", function() {

    let errorMessages = document.getElementsByClassName("error");

    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerHTML = "";
    }

    document.getElementById("formMessage").innerHTML = "";

});

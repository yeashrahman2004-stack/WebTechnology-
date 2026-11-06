

// 1. REGISTRATION VALIDATION

function nameCheck() {
    let nametext = document.getElementById("fullname").value;
    let nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed

    if (nametext.length < 5 || nametext == "") {
        document.getElementById("nameerror").innerHTML = "Name is not valid (must be 5+ characters)";
        return false;
    } else if (!nameRegex.test(nametext)) {
        document.getElementById("nameerror").innerHTML = "Name cannot contain numbers or special characters";
        return false;
    } else {
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}

// Student ID Validation 
function studentIdCheck() {
    let studentId = document.getElementById("studentid").value;
    let idRegex = /^[0-9-]+$/; 

    if (!idRegex.test(studentId)) {
        document.getElementById("iderror").innerHTML = "Student ID can only contain numbers and hyphens (no letters)";
        return false;
    } else {
        document.getElementById("iderror").innerHTML = "";
        return true;
    }
}

// Email Validation
function emailCheck() {
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        document.getElementById("emailerror").innerHTML = "Enter a valid email address";
        return false;
    } else {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}

// Phone Validation 
function phoneCheck() {
    let phone = document.getElementById("phone").value;
    let phoneRegex = /^01[0-9]{9}$/; 

    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneerror").innerHTML = "Phone must start with 01 and be exactly 11 digits";
        return false;
    } else {
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}

// Password Validation 
function passwordCheck() {
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm_password").value;
    
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    
    if (!passRegex.test(pass)) {
        document.getElementById("passerror").innerHTML = "Password needs 6+ chars, at least 1 uppercase, 1 lowercase, and 1 number";
        return false;
    } else if (pass !== confirmPass) {
        document.getElementById("passerror").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("passerror").innerHTML = "";
        return true;
    }
}

function myVal(event) {
    let isNameValid = nameCheck();
    let isIdValid = studentIdCheck();
    let isEmailValid = emailCheck();
    let isPhoneValid = phoneCheck();
    let isPassValid = passwordCheck();

   
    if (!isNameValid || !isIdValid || !isEmailValid || !isPhoneValid || !isPassValid) {
        event.preventDefault(); 
        window.scrollTo(0, 0); 
        return false;
    } else {
        alert("Registration Successful!");
        return true;
    }
}


// 3. EVENT CREATE VALIDATION

function validateEvent(event) {
    let eventTitle = document.getElementById("eventtitle").value;
    let eventDate = document.getElementById("eventdate").value;
    
    if (eventTitle.length < 6) {
        document.getElementById("eventError").innerHTML = "Event Title must be at least 6 characters long.";
        event.preventDefault();
        window.scrollTo(0, 0);
        return false;
    }
    
    if (eventDate === "") {
        document.getElementById("eventError").innerHTML = "Please select a date for the event.";
        event.preventDefault();
        window.scrollTo(0, 0);
        return false;
    }

    // Past Date Check
    let today = new Date();
    today.setHours(0, 0, 0, 0); 
    let selectedDate = new Date(eventDate);
    
    if (selectedDate < today) {
        document.getElementById("eventError").innerHTML = "Event date cannot be in the past!";
        event.preventDefault();
        window.scrollTo(0, 0);
        return false;
    }

    document.getElementById("eventError").innerHTML = "";
    alert("Event Published Successfully!");
    return true;
}



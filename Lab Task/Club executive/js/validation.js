
// 1. REGISTRATION VALIDATION
// --------------------------------------------
function nameCheck() {
    let nametext = document.getElementById("fullname").value;
    if (nametext.length < 5 || nametext == "") {
        document.getElementById("nameerror").innerHTML = "Name is not valid (must be 5+ characters)";
        return false;
    } else {
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}

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

function passwordCheck() {
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm_password").value;
    let passRegex = /^(?=.*[0-9]).{6,}$/;
    
    if (!passRegex.test(pass)) {
        document.getElementById("passerror").innerHTML = "Password must be 6+ characters and contain a number";
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
    let isEmailValid = emailCheck();
    let isPassValid = passwordCheck();

    if (isNameValid == false || isEmailValid == false || isPassValid == false) {
        event.preventDefault(); 
        window.scrollTo(0, 0); 
        return false;
    } else {
        alert("Registration Successful!");
        return true;
    }
}


// 3. EVENT CREATE VALIDATION
// --------------------------------------------
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

    document.getElementById("eventError").innerHTML = "";
    alert("Event Published Successfully!");
    return true;
}



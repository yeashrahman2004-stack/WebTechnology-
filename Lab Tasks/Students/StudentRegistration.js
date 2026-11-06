function nameCheck(){
    let studentname=document.getElementById("name").value;
    if(studentname.length<5 || !isNaN(studentname)){
        document.getElementById("errorname").innerHTML="The name is not valid";
        return false;
    }
    else{
        document.getElementById("errorname").innerHTML="";
        return true;
    }
}
function phoneCheck(){
   let studentphone=document.getElementById("phonenumber").value;
    if(studentphone.length<11 || isNaN(studentphone) || studentphone.length>11){
        document.getElementById("errornum").innerHTML="The number is not valid";
        return false;
    }
    else if(studentphone==""){
        document.getElementById("errornum").innerHTML="The number is not valid";
        return false;
    }
    else{
        document.getElementById("errornum").innerHTML="";
        return true;
    }
}
function emailCheck(){
    let studentemail = document.getElementById("email").value;
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(studentemail)) {
        document.getElementById("errormail").innerHTML="The email address is not valid";
        return false;
    }
    else {
        document.getElementById("errormail").innerHTML = "";
        return true;
    }
}
function passCheck(){
   let studentpass=document.getElementById("passward").value;
    if(studentpass.length<5){
        document.getElementById("errorpass").innerHTML="The passward is not valid";
        return false;
    }
    else if(studentpass==""){
        document.getElementById("errorpass").innerHTML="Please fill up passward";
        return false;
    }
    else{
        document.getElementById("errorpass").innerHTML="";
        return true;
    } 
}
function conpassCheck(){
    let studentpass=document.getElementById("passward").value;
    let studentconpass=document.getElementById("confirmedpassward").value;
    if(studentconpass!=studentpass){
      document.getElementById("errorconpass").innerHTML="Your password is incorrect please try again";
      return false;   
    }
    else{
        document.getElementById("errorconpass").innerHTML="";
        return true;
    }
} 
function registrationvalidateForm(){

    if((nameCheck()==true) && (phoneCheck()==true) && (emailCheck()==true) && (passCheck()==true) && (conpassCheck()==true)){
        return true;
    }
    else{
        return false;
    }
}

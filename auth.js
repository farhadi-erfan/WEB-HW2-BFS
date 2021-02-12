import {fadeIn, fadeOut} from './index.js';



document.getElementById("submit").addEventListener("click", signup, false);


function signup() {
    
    var email = document.getElementById("mail").value;
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("password2").value;
    var legal = document.getElementById("legal").checked;
    var error = document.getElementById("error");
    error.value = '';
    console.log(legal)
    if (legal === false) {
        error.value += "لطفا قوانین و شرایط را بپذیرید!"
        fadeIn(error, 100);
        setTimeout(()=>fadeOut(error, 400, false), 3500);
    }
    if (validateEmail(email) === true) {
        
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
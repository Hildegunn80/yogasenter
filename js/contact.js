const form=document.querySelector("#contactForm");
const inputname = document.querySelector("#inputname");
const inputnameError = document.querySelector("#inputnameError");

const mobile = document.querySelector("#mobile");
const mobileError = document.querySelector("#mobileError");


const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");


const chkMelding = document.querySelector("#chkMelding");
const chkKeyYogaMandag = document.querySelector("#chkKeyYogaMandag");
const chkKeyYogaOnsdag = document.querySelector("#chkKeyYogaOnsdag");
const chkVennepris = document.querySelector("#chkVennepris");
const ChkMeditativHealing = document.querySelector("#ChkMeditativHealing");

function validateForm() {

    console.log("chk value: " + ChkMeditativHealing.checked);

    try {
        event.preventDefault();
        let status = true;

        if(!isAnyActionSelected()) status = false;
        if(!validate(inputname,inputnameError,5)) status = false;
        if(!validate(mobile,mobileError,8)) status = false;
        if(!validate(address,addressError,10)) status = false;
        if(!validate(email,emailError,10, true)) status = false;
        
        showValidated(status);
    }
    catch(error) {
        createHtmlError(error);
    }
}

function isAnyActionSelected() {
    if (ChkMeditativHealing.checked) return true;
    if (chkMelding.checked) return true;
    if (chkKeyYogaMandag.checked) return true;
    if (chkKeyYogaOnsdag.checked) return true;
    if (chkVennepris.checked) return true;
    
    return false;
}

function hideErrors() {
    inputnameError.style.display = "none";
    mobileError.style.display = "none";
    addressError.style.display = "none";
    emailError.style.display = "none";
}

function showValidated(status) {
    const formValidated = document.querySelector(".form-validated");
    console.log("Validate status = " + status);

    if(status) {
        formValidated.style.display = "block";
        formValidated.innerHTML = "Message sent....";
    } else {
        formValidated.style.display = "none";
    }
}

function checkLength(input, length) {    
    return (input.value.trim().length > length);
}

function validate(input,inputError,length,isEmail = false) {
    if(input == null) {
        console.log("validate input is null");
        return false;
    }
    if(inputError == null) {
        console.log("validate inputError is null");
        return false;
    }

    if(isEmail) {
        if(isEmailValid(input.value) === true) {
            inputError.style.display = "none";
            return true;
        } else {
            inputError.style.display = "block";
            return false;            
        }
    } else {
        if(checkLength(input,length) === true) {
            inputError.style.display = "none";
            return true;
        } else {
            inputError.style.display = "block";
            return false;
        }
    }   
}


function checkLength(input, length) {    
    return (input.value.trim().length >= length);
}
     
function isEmailValid(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
    

function createHtmlError(error) {
    const container = document.querySelector(".boks-d");
    console.log("Exception: " + error);
    document.body.style.backgroundColor = "white";
    
    container.innerHTML = `<div class="title"><h1>OPS 404 ERROR.....</h1></div>
                            <img src="/images/404.webp" height="200" style="max-width: 240px">
                            <div class="details-date">An error occurred processing data</div>
                            
                            <div class="home"><a href="pamelding.html"><h1>Return</h1></a></div>
                            `;
    
    const title = document.querySelector(".title");
    title.style.color = "black";
}

console.log("Form validator loaded...");   
form.addEventListener("submit",validateForm);
window.onload = hideErrors();
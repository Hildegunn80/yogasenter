const form=document.querySelector("#contactForm");
const firstName=document.querySelector("#fname");
const firstNameError=document.querySelector("#formError");
const email=document.querySelector("#email");
const emailError=document.querySelector("#emailError");


function validateForm() {
    event.preventDefault();

    if(checkLenght(firstName.value,2)===true){
        form.error.getElementsByClassName.display="none";
    }else{
        firstNameError.getElementsByClassName.display="block";
    }
}

console.log("hello");
   
form.addEventListener("submit",validateForm);

function checkLenght(value,len) {
    if(value.trim().lenght>len) {
         return true;
    } else {
        return false;
    }
}
     
function validateEmail(email){
    const regEx=/\S+@\S+\.\S+/;
    const patternMatches=regEx.test(email);
    return patternMatches;
}
    



let emailFirst = document.querySelector("#email_first_section");
let submitButtonFirst = document.querySelector("#submit_first_section");
let errorMessageEmailFirst = document.querySelector("#error_message_email_first_section");

let emailFooter = document.querySelector("#email_pre_footer");
let errorMessageFooter = document.querySelector("#error_message_pre_footer_form");
let submitFooter = document.querySelector("#submit_pre_footer");

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

document.querySelector("#overlay").addEventListener("click", function() {
    if(event.target == document.querySelector("#overlay") || event.target == document.querySelector("#overlay_button")) {
        document.querySelector("#body").classList.remove("validation");
        document.querySelector("#overlay").classList.remove("overlay_show")
        document.querySelector("#validateMessage").classList.remove("validateMessage_show")
    } 
});




function validateEmail(email) {
           var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
           console.log(re.test(email.value));
           return re.test(email.value);
    }


emailFirst.addEventListener("input", function(){
    errorMessageEmailFirst.classList.remove("show");
    emailFirst.classList.remove("red_border");
});
submitButtonFirst.addEventListener("click", function() {
    if(emailFirst.validity.valueMissing) {
        errorMessageEmailFirst.classList.add("show");
        emailFirst.classList.add("red_border");
    } else if(!validateEmail(emailFirst)) {
        errorMessageEmailFirst.classList.add("show");
        emailFirst.classList.add("red_border");
        
    } else {
        console.log("valid email");
        document.querySelector("#body").classList.add("validation");
        document.querySelector("#overlay").classList.add("overlay_show")
        document.querySelector("#validateMessage").classList.add("validateMessage_show")
            
    }
});

emailFooter.addEventListener("input", function(){
    errorMessageFooter.classList.remove("show_footer");
    emailFooter.classList.remove("red_border");
});

submitFooter.addEventListener("click", function() {
    if(emailFooter.validity.valueMissing) {
        errorMessageFooter.classList.add("show_footer");
        emailFooter.classList.add("red_border");
    } else if(!validateEmail(emailFooter)) {
        errorMessageFooter.classList.add("show_footer");
        emailFooter.classList.add("red_border");
    } else {
        console.log("valid email");
        document.querySelector("#body").classList.add("validation");
        document.querySelector("#overlay").classList.add("overlay_show")
        document.querySelector("#validateMessage").classList.add("validateMessage_show")
    }
});

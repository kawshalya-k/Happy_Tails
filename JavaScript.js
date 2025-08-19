function showSignup(){
    document.getElementById("login").style.display="none";
    document.getElementById("signup").style.display="flex";
}

function showLogin(){
    document.getElementById("login").style.display="flex";
    document.getElementById("signup").style.display="none";
}

const gototop_btn = document.getElementById('gototop_btn');

window.onscroll = function(){
    if (document.body.scrollTop>100 || document.documentElement.scrollTop>100) {
        gototop_btn.style.display = 'block';
    } else {
        gototop_btn.style.display = 'none';
    }
};

gototop_btn.onclick = function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
};

document.addEventListener("DOMContentLoaded", function (){
    const MessageBox = document.getElementById("MessageBox");
    const MessageText = document.getElementById("MessageText");
    const Ok_Btn = document.getElementById("Ok");

    const contactform = document.getElementById("contact_form");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");

    if (contactform) {
        contactform.addEventListener("submit", function(e){
            e.preventDefault();
            showMessage("Form Submitted Successfully!");
            contactform.reset();
        });
    }

    if (login) {
        login.addEventListener("submit", function(e){
            e.preventDefault();
            showMessage("Login Successful!");
            login.reset();
        });
    }

    if (signup) {
        signup.addEventListener("submit", function(e){
        e.preventDefault();
        showMessage("Congratulations! Sign up successful.");
        signup.reset();
        });
    }

    Ok_Btn.addEventListener("click", function(){
        MessageBox.style.display = "none";
    });

    function showMessage(text){
        MessageText.textContent = text;
        MessageBox.style.display = "block";
    }
});


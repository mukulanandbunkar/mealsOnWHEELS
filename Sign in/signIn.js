
//VALIDATION CHECK FOR EMAIL
function validationEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("emailnotmatch").innerText = '*please fill  your email';
        return false;
    } else
        if (email.indexOf('@') <= 0) {
            document.getElementById("emailnotmatch").innerText = '*invalid @ position';
            return false;
        }
        else {
            document.getElementById("emailnotmatch").innerText = '';
            return true;

        }


}

// VALIDATION CHECK FOR PASSWORD
function validationPassword() {
    var password = document.getElementById("password").value;

    if (password == "") {
        document.getElementById("passnotmatch").innerText = '*please fill your password';
        return false;
    } else
        if ((password.length <= 5) || (password.length >= 20)) {
            document.getElementById("passnotmatch").innerText = '*password is between 5 to 20 character';
            return false;
        }
        else {
            document.getElementById("passnotmatch").innerText = '';
            return true;
        }

}



// FUNCTION TO SAVE THE SIGNIN DATA
let getData = () => 
{

    let validEmail = validationEmail();
    let validPassword = validationPassword();
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if (userRecord.some((v) => { return (v.email == email && v.password == password)}) && validEmail && validPassword ) 
    {
        alert("Login pass!!!");
        let currentUser = userRecord.filter((v) => { return (v.email == email && v.password == password)})[0];
        localStorage.setItem('name', currentUser.name)
        localStorage.setItem('email', currentUser.email)
        window.location.href= "./profile/profile.html";

    } 
    else
    {
        alert("login Fail!!!")
    }
        
        
}


// OTP TO GENERATE 4 DIGIT RANDOM NUMBER
const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

let otp = generateOTP();

// FUNCTION TO SEND THE MAIL TO REQUIED ID
function mail(e) {
    e.preventDefault();
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    sendEmail(Name, email, otp);

}

//for sending otp
function sendEmail(Name, email, OTP) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: email,
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `MealsOnWheels IS SENT YOU A MESSAGE`,
        Body: `Hi,<strong>${Name}</strong><br> Your four digit OTP for registration on meals on wheels is <strong>${OTP}</strong><br><br> Regards,<br><strong>MUKUL ANAND BUNKAR</strong>`
    }).then(
        message => alert("OTP sent sucessfully!!!!!")
    );
}

//for sucessful sign up
function sendEmailSuccess(Name, email,password) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: email,
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `MealsOnWheels IS SENT YOU A MESSAGE`,
        Body: `Hi,<strong>${Name}</strong><br> You are sucessfully registered with <strong>MealsOnWheels</strong><br>login Credential:-<br>Email: ${email}<br>Password: ${password}<br> Regards,<br><strong>MUKUL ANAND BUNKAR</strong> `
    }).then(
        message => alert("sucessfully registered!!!!!")
    );
}


//GET OTP REQUEST
document.querySelector('#getOtp').addEventListener('click', mail);

//FUNCTIONS FOR THE VALIDAION

//VALIDATION CHECK FOR NAME
function validationName() {
    var Name = document.getElementById("name").value;
    if (Name == "") {
        document.getElementById("namenotmatch").innerText = '*please fill  your name';
        return false;
    }
    if (Name.length <= 2) {
        document.getElementById("namenotmatch").innerText = '*please maintain the name length';
        return false;
    }
    if (!isNaN(Name)) {
        document.getElementById("namenotmatch").innerText = '*name cannot be a number';
        return false;
    }


    document.getElementById("namenotmatch").innerText = '';
    return true;
}

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
    var repassword = document.getElementById("repassword").value;
    if (password == "") {
        document.getElementById("passnotmatch").innerText = '*please fill your password';
        return false;
    } else
        if ((password.length <= 5) || (password.length >= 20)) {
            document.getElementById("passnotmatch").innerText = '*password is between 5 to 20 character';
            return false;
        } else
            if (repassword == "") {
                document.getElementById("repassnotmatch").innerText = '*please retype the password';
                return false;
            } else
                if (password != repassword) {
                    document.getElementById("repassnotmatch").innerText = '*password are not matching';
                    return false;
                }
                else {
                    document.getElementById("passnotmatch").innerText = '';
                    document.getElementById("repassnotmatch").innerText = '';
                    return true;
                }

}



// FUNCTION TO SAVE THE SIGNUP DATA
let saveData = () => {
    
    let validName = validationName();
    let validEmail = validationEmail();
    let validPassword = validationPassword();
    let Name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let OTP = document.getElementById("OTP").value;

    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")):[];

    if(userRecord.some((v)=> { return v.email == email}))
    {
    alert("User Alredy Registered");
    }else
    if ((OTP == otp) && validName && validEmail && validPassword) {
        document.getElementById("otpnotmatch").innerText = '';
        
        userRecord.push
        ({
          "name" : Name,
          "email": email,
          "password" : password

        })

    localStorage.setItem("users", JSON.stringify(userRecord));
    sendEmailSuccess(Name, email, password);
    alert('user registered successfully checkout you email to see user credintials')
    window.location.href = "./signIn.html"
    }
    else {
        console.log('otp invalid');
        document.getElementById("otpnotmatch").innerText = '*otp not matched';
    }
}





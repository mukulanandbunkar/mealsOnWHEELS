//send mail
document.querySelector('.contactForm').addEventListener('submit', mail);

function mail(e) {
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    document.querySelector('.contactForm').reset();
    sendEmail(Name, email, message)
}
function sendEmail(Name, email, message) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: 'mukulanandbunkarreceiver@gmail.com',
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `${Name} IS SENT YOU A MESSAGE`,
        Body: `Name: ${Name}<br/>Email: ${email}<br/>${message}`
    }).then(
        message => alert("Message send sucessfully!!!!!")
    );
}

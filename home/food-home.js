
// FUNCTION TO CHECK IF USER ICON
function userCheck()
{
let email = localStorage.getItem('email')
let name = localStorage.getItem('name')
if (email && name)
    {
    document.querySelector('.user').innerHTML =`<i class="fas fa-user-check fa-2x"></i>`;
    }
    else
    {
      document.querySelector('.user').innerHTML =`<i class="fas fa-user-times fa-2x"></i>`;
    }
}
userCheck();

// FUNCTION TO TOGGLE COLLAPSE BAR AND ITS LOGIN/LOGOUT BUTTON

function collapseUserDetail(){
    let email = localStorage.getItem('email')
    let name = localStorage.getItem('name')
    
    document.querySelector('.userDetail').classList.toggle('userDetailChange');
    if (email && name)
    {
        document.querySelector('.userName').innerText = name;
        document.querySelector('.userEmail').innerText = email;
        document.querySelector('.userBtn').innerText ="Log Out";
    }
    else
    {
        document.querySelector('.userName').innerText ="PLease login!!!!";
        document.querySelector('.userBtn').innerText ="Log In";
       }

   

}


// logic for user button
document.querySelector('.USERBUTTON').addEventListener('click', ()=>{
    let email = localStorage.getItem('email')
    let name = localStorage.getItem('name')
    console.log('mukul')
    if (email && name)
    {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('itemsInCart');
        localStorage.removeItem('cartNumbers');
        localStorage.removeItem('TotalCost');
       window.location.reload(true);
        
    }
    else
    {
        window.location.href = "../Sign in/signIn.html"
    }
})

// FUNCTION TO SHOW NUMBER OF ITEMS LOADED ON CART
function onLoadCartNo() {
    let productNumber = localStorage.getItem('cartNumbers');
    if (productNumber) {

        document.querySelector('.cartNo').textContent = productNumber;
    }

}
onLoadCartNo()


//function to check if user is alredy login or not
function checkLogin()
{
    
    let user = localStorage.getItem('name');

    if (user)
    {
        window.location.href = "../Sign in/profile/profile.html"
    }
    else
    {
    alert('please sign in first!!!')
    window.location.href = "../Sign in/signIn.html"
    }
}





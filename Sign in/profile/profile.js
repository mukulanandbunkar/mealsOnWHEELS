console.log("mukul")







//for logout
function logOut() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    localStorage.removeItem('itemsInCart');
    localStorage.removeItem('cartNumbers');
    localStorage.removeItem('TotalCost');
    window.location.href = "../signIn.html"


}


//DIAPLAY THE CART ITEMS
function displayCart() {
    let showTable = document.querySelector('#selectedItem');
    let cartItem = JSON.parse(localStorage.getItem('itemsInCart'));
    console.log(cartItem);

    if (cartItem && showTable) {
        showTable.innerHTML = '';
        Object.values(cartItem).map((element) =>
            showTable.innerHTML += `<div class="d-flex align-items-center">
       <div class="col text-center ">${element.itemName}</div>
       <div class="col text-center  ">
           <div class="quantity">
               <div class="minus text-success"><i class="fas fa-minus-circle fa-2x"></i></div>
               <div class="amount" style="font-size:x-large; font-weight:bolder;">${element.inCart}</div>
               <div onclick="increaseQuantity()" class="plus text-success"><i class="fas fa-plus-circle fa-2x"></i></div>
           </div>
       </div>
       <div class="col text-center "><span>₹ </span>${element.price * element.inCart}<span>/-</span></div>
       </div>`
        )
    }



}

function validationNumber() {
    let mobilenumber = Number(document.getElementById('mobilenumber').value)
    let errorNum = document.querySelector('.incorrectNo');
    if (mobilenumber === 0) {
        errorNum.innerText = '*enter number first';
        return false;
    }
    else
        if (isNaN(mobilenumber)) {
            errorNum.innerText = '*enter valid number';
            return false;
        }
        else
            if ((String(mobilenumber).length < 10) || (String(mobilenumber).length > 10)) {
                errorNum.innerText = '*enter 10 digits only';
                return false;
            }
            else {
                errorNum.innerText = '';
                return true;
            }
}


function validationAddress() {
    let address = document.getElementById('address').value;
    let errorAddress = document.querySelector('.incorrectAddress');
    if (address.length === 0) {
        errorAddress.innerText = '*enter address first'
        return false;
    }
    else {
        errorAddress.innerText = ''
        return true;
    }

}




function successfullyOrder() {
    let address = document.getElementById('address').value;
    let mobilenumber = Number(document.getElementById('mobilenumber').value)
    let checkNum = validationNumber();
    let checkAddress = validationAddress();
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let cartItem = localStorage.getItem('cartNumbers')

    if (cartItem) 
    {

        if (checkAddress && checkNum) {
            localStorage.removeItem('itemsInCart');
            localStorage.removeItem('cartNumbers');
            localStorage.removeItem('TotalCost');
            sendEmailSuccess(name, email, address, mobilenumber);
            alert('Order placed Sucessfully!!!!')
            window.location.href = "./sucessfulOrder.html"

        }
    }
    else 
    {
        alert('your cart is empty!!!')

    }


}

//function to send successful order message
function sendEmailSuccess(Name, email, address, mobilenumber) {


    Email.send({
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: email,
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `MealsOnWheels IS SENT YOU A MESSAGE`,
        Body: `Hi,<strong>${Name}</strong><br> You order is sucessfully placed on <strong>MealsOnWheels</strong><br>Email: ${email}<br>Mobile no.: ${mobilenumber} <br>Address: ${address}<br>
        
        <br> Regards,<br><strong>MUKUL ANAND BUNKAR</strong> `
    }).then(
        message => alert("order detail sent successfully!!!!!")
    );
}

function reorder() {
    localStorage.removeItem('itemsInCart');
    localStorage.removeItem('cartNumbers');
    localStorage.removeItem('TotalCost');

}







function increaseQuantity()
{  let plus = document.querySelector('.plus');
    let itemsOnCart = localStorage.getItem('itemsInCart');
    let jsonCart = JSON.parse(itemsOnCart)
  
   
    for (let i=0; i<=plus.length; i++)
    {   plus.addEventListener('click', ()=>{
        console.log('mukul')
    })
       
    }

 
}










displayCart();

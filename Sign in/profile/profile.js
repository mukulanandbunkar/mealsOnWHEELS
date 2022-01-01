console.log("mukul")






<<<<<<< HEAD
=======

>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
//for logout
function logOut() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    localStorage.removeItem('itemsInCart');
    localStorage.removeItem('cartNumbers');
    localStorage.removeItem('TotalCost');
    window.location.href = "../signIn.html"


}


<<<<<<< HEAD
//DISPLAY THE CART ITEMS
function displayCart() {
    let showTable = document.querySelector('#selectedItem');
    let cartItem = JSON.parse(localStorage.getItem('itemsInCart'));
   
=======
//DIAPLAY THE CART ITEMS
function displayCart() {
    let showTable = document.querySelector('#selectedItem');
    let cartItem = JSON.parse(localStorage.getItem('itemsInCart'));
    console.log(cartItem);
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909

    if (cartItem && showTable) {
        showTable.innerHTML = '';
        Object.values(cartItem).map((element) =>
<<<<<<< HEAD
            showTable.innerHTML += 
            `<tr>
            <td data-label="itemName">${element.itemName}</td>
            <td data-label="quantity">${element.inCart}</td>
            <td data-label="netTotal"><span>₹ </span>${element.price}<span>/-</span></td>  
            <td data-label="netTotal"><span>₹ </span>${element.price*element.inCart}<span>/-</span></td>       
            </tr>`
=======
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
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
        )
    }



<<<<<<< HEAD
    let finalHTML = showTable.innerHTML;
    console.log(finalHTML);
    return finalHTML;

}

function grandTotal()
{
    let Cost = Number(localStorage.getItem('TotalCost'));
    let Total = document.querySelector('#totalCost');
    console.log(totalCost)
    if(Cost != 0){
    Total.innerText = Cost;
    }
    else
    {
        Total.innerText = '000';
    }
   
}


=======
}

>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
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
<<<<<<< HEAD
    let grandTotal = localStorage.getItem('TotalCost');
=======
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909

    if (cartItem) 
    {

        if (checkAddress && checkNum) {
            localStorage.removeItem('itemsInCart');
            localStorage.removeItem('cartNumbers');
            localStorage.removeItem('TotalCost');
<<<<<<< HEAD
            sendEmailSuccess(name, email, address, mobilenumber, grandTotal);
=======
            sendEmailSuccess(name, email, address, mobilenumber);
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
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
<<<<<<< HEAD
function sendEmailSuccess(Name, email, address, mobilenumber, grandTotal) {


let finalHtml = displayCart();
console.log(grandTotal);


    Email.send({

=======
function sendEmailSuccess(Name, email, address, mobilenumber) {


    Email.send({
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: email,
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `MealsOnWheels IS SENT YOU A MESSAGE`,
        Body: `Hi,<strong>${Name}</strong><br> You order is sucessfully placed on <strong>MealsOnWheels</strong><br>Email: ${email}<br>Mobile no.: ${mobilenumber} <br>Address: ${address}<br>
<<<<<<< HEAD
        <table class="table" border="1">
                        <thead>
                            <tr>
                             <th>ITEM NAME</th>
                             <th>QUANTITY</th>
                             <th>UNIT PRICE</th>
                             <th>NET PRICE</th>
                             
                            </tr>
                        </thead>
                        <tbody id="selectedItem">
                              ${finalHtml}
                   
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" class="fw-bolder">GRAND TOTAL</td>
                                <td><span>₹ </span>${grandTotal}<span>/-</span></td>
                            </tr>
                        </tfoot>
                      </table>
=======
        
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
        <br> Regards,<br><strong>MUKUL ANAND BUNKAR</strong> `
    }).then(
        message => alert("order detail sent successfully!!!!!")
    );
}

<<<<<<< HEAD
//FUNCTION TO RESET THE CART AFTER SUCCESSFUL ORDER
=======
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
function reorder() {
    localStorage.removeItem('itemsInCart');
    localStorage.removeItem('cartNumbers');
    localStorage.removeItem('TotalCost');

}


<<<<<<< HEAD
=======





>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909
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

<<<<<<< HEAD
displayCart();
grandTotal();
=======









displayCart();
>>>>>>> 3da6342055a4331254fad3251dc38856a0bc5909

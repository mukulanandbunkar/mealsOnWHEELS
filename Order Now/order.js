console.log('mukul')
let cart = document.querySelectorAll(".cart");



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





//ARRAYS OF LISTS OF ITEMS
let items = [
    {
        itemName: 'CholaBhatura',
        price: 100,
        inCart: 0
    },
    {
        itemName: 'Samosa',
        price: 150,
        inCart: 0
    },
    {
        itemName: 'Dhokla',
        price: 180,
        inCart: 0
    },
    {
        itemName: 'Gatte_saag',
        price: 200,
        inCart: 0
    },
    {
        itemName: 'Puliyodharai',
        price: 230,
        inCart: 0
    },
    {
        itemName: 'Chicken_Tikka',
        price: 500,
        inCart: 0
    },
    {
        itemName: 'Rosogolla',
        price: 80,
        inCart: 0
    },
    {
        itemName: 'Chicken_Chettinad',
        price: 300,
        inCart: 0
    },
    {
        itemName: 'Shahi_Paneer',
        price: 280,
        inCart: 0
    },
    {
        itemName: 'Chola_Bhatura',
        price: 360,
        inCart: 0
    },
    {
        itemName: 'Shahi_Paneer',
        price: 280,
        inCart: 0
    },
    {
        itemName: 'Chicken_Chettinad',
        price: 300,
        inCart: 0
    },
    {
        itemName: 'Kuzhi_Paniyaaram',
        price: 320,
        inCart: 0
    },
    {
        itemName: 'Bisi_Bele_Bhaat',
        price: 220,
        inCart: 0
    },
    {
        itemName: 'Hyderabadi_Biryani',
        price: 510,
        inCart: 0
    },
    {
        itemName: 'Litti_Chokha',
        price: 230,
        inCart: 0
    },
    {
        itemName: 'Parathe',
        price: 450,
        inCart: 0
    },
    {
        itemName: 'Rajma_Chawal',
        price: 400,
        inCart: 0
    },

];



//EVENT LISTENER FOR ADD TO CART BUTTONS
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(items[i]);
        totalCost(items[i]);
    })
   
}

function onLoadCartNo() {
    let productNumber = localStorage.getItem('cartNumbers');
    if (productNumber) {

        document.querySelector('.cartNo').textContent = productNumber;
    }

}



// FUNCTION TO UPDATE THE CART NUMBER

function cartNumbers(items) {
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    if (productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.cartNo').textContent = productNumber + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cartNo').textContent = 1;
    }

    insertItem(items)
}

// FUNCTION TO INSERT ITEMS

function insertItem(items) 
{
     
     let cartItems =  localStorage.getItem('itemsInCart');
     cartItems= JSON.parse(cartItems);
    console.log(cartItems);
    
    {if(cartItems != null)
    {    if(cartItems[items.itemName] == undefined)
        {
            cartItems = {
                ...cartItems,
                [items.itemName]: items
            }
    
        }
        cartItems[items.itemName].inCart += 1;  
    }
    else
    { 
        items.inCart = 1;
          cartItems = {
            [items.itemName]: items
        } 
    }}

      
    localStorage.setItem("itemsInCart", JSON.stringify (cartItems));
    
}


// FUNCTION TO CALCULATE TOTAL COST AND STORE IT IN LOCAL STORAGE


function totalCost(items)
{

let totalPrice = localStorage.getItem('TotalCost')
totalPrice = parseInt(totalPrice);
if(totalPrice)
{
    localStorage.setItem('TotalCost', totalPrice+= (items.price* items.inCart))
}
else
{
    localStorage.setItem('TotalCost',  (items.price* items.inCart))
}
}

//function to check if user is alredy login or not
function checkLogin()
{
    
    let user = localStorage.getItem('name');
    console.log(typeof (user));

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





// Function CALL TO UPDATE CART NO PERMANENTLY
onLoadCartNo();

 
console.log("hi");

let bigimg =document.getElementById("main-img");
let miniImg = document.querySelectorAll(".smoll-img");
let cardImg = document.querySelectorAll(".card-img");


document.addEventListener('DOMContentLoaded', function () {
    let bigimg = document.getElementById("main-img");
    let miniImg = document.querySelectorAll(".smoll-img");
  
    for (let i = 0; i < miniImg.length; i++) {
      miniImg[i].addEventListener("click", function () {
        bigimg.src = miniImg[i].src;
      });
    }
  });
  







function page(){
   
    window.location.href="singal-product-page.html"
    
}

// shop

// Get references to the button and cart elements
        const addToCartButton = document.getElementById('add-to-cart');
        const cartItemsList = document.getElementById('cart-items');
        
        // Function to add a product to the cart
        function addToCart() {
            // Create a new list item for the product
            const cartItem = document.createElement('li');
            cartItem.textContent = 'Product'; // You can replace 'Product' with the actual product details
        
            // Add the product to the cart
            cartItemsList.appendChild(cartItem);
        }
        
        // Add a click event listener to the button
        addToCartButton.addEventListener('click', addToCart);
        
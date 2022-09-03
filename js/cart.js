/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBodySelector = document.querySelector('tbody')
  tableBodySelector.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  
  // TODO: Find the table body
  let tableBodySelector = document.querySelector('tbody')
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    //DONE!
    let tableRow = document.createElement('tr');
    tableBodySelector.appendChild(tableRow);
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tableButton = document.createElement('button');
    tableButton.innerHTML = 'x';
    tableButton.id = i;
    tableBodySelector.appendChild(tableButton);
    tableButton.addEventListener('click', removeItemFromCart);
    let tableData2 = document.createElement('td');
    tableData2.innerHTML = cart.items[i].quantity;
    tableBodySelector.appendChild(tableData2);
    let tableData3 = document.createElement('td');
    tableData3.innerHTML = cart.items[i].product;
    tableBodySelector.appendChild(tableData3);
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  //DONE!
  
}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  //DONE?
  cart.items.splice(this.id, 1);
  localStorage.removeItem('cart');

  
  // TODO: Save the cart back to local storage
  //DONE!
  localStorage.setItem('cart', JSON.stringify(cart.items));


  // TODO: Re-draw the cart table
  //DONE!
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();

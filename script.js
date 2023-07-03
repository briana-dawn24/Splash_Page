// JavaScript code to handle button click event
var btn = document.getElementById("btn");
btn.addEventListener("click", function() 
{
    window.location.href = this.href;
});
// JavaScript code to populate the show page with data
var product = {
name: "Example Product",
description: "This is a sample product description.",
price: "$19.99"
};

document.getElementById("product-name").textContent = product.name;
document.getElementById("product-description").textContent = product.description;
document.getElementById("product-price").textContent = product.price;
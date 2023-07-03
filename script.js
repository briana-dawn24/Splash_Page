// JavaScript code to handle button click event
var btn = document.getElementById("btn");
btn.addEventListener("click", function() 
{
    window.location.href = this.href;
});
// Javascript code to handle back button
var btn = document.querySelector(".goback-button");
btn.addEventListener("click", function() {
  goBack();
});

function goBack() {
  history.back();
}
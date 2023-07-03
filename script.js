// JavaScript code to handle enter button.
document.getElementById("btn").addEventListener("click", function()
{
    window.location.href = this.href;
});

// Javascript code to handle back button
  document.querySelector("btnback").addEventListener("click", function()
  {
    goBack();
  });
  
  function goBack()
  {
    history.back();
  }
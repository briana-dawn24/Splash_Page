// JavaScript code to handle enter button.
document.getElementById("btn").addEventListener("click", function()
{
    window.location.href = this.href;
});

// Javascript code to handle back button
  document.querySelector(".goback-button").addEventListener("click", function()
  {
    goBack();
  });
  
  function goBack()
  {
    history.back();
  }
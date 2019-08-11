(function() {
  function clickHandler() {
    alert("me amor");
  }
  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function() {
    clickHandler();
  });
})();

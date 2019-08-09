let counter = 0;
function timeout() {
  setTimeout(function() {
    console.log("Hey there  " + counter++);
    timeout();
  }, 2000);
}
timeout();

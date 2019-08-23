function set() {
  let elements = document.getElementsByName("cssProperty");
  for (let index = 0; index < elements.length; index++) {
    console.log(index);
  }
}
document.getElementById("set").addEventListener("click", set);

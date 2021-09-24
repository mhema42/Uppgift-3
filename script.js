let chBtn = document.querySelector("#chBtn");
let chWrld = document.querySelector("#chWrld");

chBtn.addEventListener(
  "click",
  function (event) {
    document.getElementById("chWrld").innerHTML = "Goodbye world";
  },
  false
);
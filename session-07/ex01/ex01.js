const headText = document.getElementById("header");
headText.textContent = "New Header";
const paraText = document.querySelector(".text");
paraText.textContent = "New Text";

headText.classList.add("highlight");
const list = document.getElementById("list");
list.style.color = "red";

// ALL GOOD!
console.log("work");

let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}
let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("event : ,", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  } else {
    document.getElementById("theme-style").href = "blue.css";
  }
  localStorage.setItem("theme", mode);
}

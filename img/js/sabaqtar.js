const title = document.getElementsByClassName("btn_title");

function acording() {
  this.classList.toggle("active2");

  let panel = this.nextElementSibling;

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
for (let b = 0; b < title.length; b++) {
  title[b].addEventListener("click", acording);
}

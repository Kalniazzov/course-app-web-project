// card
const card = document.getElementsByClassName("card_img");
const infoCard = document.getElementsByClassName("card_info");
function submit() {
  this.classList.toggle("active");

  let info = this.nextElementSibling;

  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}

for (let a = 0; a < card.length; a++) {
  card[a].addEventListener("click", submit);
}

//QUESTION PAGE

const quest = document.getElementsByClassName("questtion");
const icon = document.getElementsByClassName("icon");

function acording() {
  this.classList.toggle("active2");

  let panel = this.nextElementSibling;

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
for (let b = 0; b < quest.length; b++) {
  quest[b].addEventListener("click", acording);
}

//COMEMT PAGE
const comentBtn = document.getElementById("comentBtn");
const items2 = document.getElementById("coment_items-2");

comentBtn.addEventListener("click", function () {
  if (items2.style.display === "block") {
    items2.style.display = "none";
  } else {
    items2.style.display = "block";
  }
});

function myFunc() {
  const text = document.querySelector(".btnTEXT1");
  text.innerHTML = "Siz tolyk tirkelmediniz";
  text.style.color = "red";
}

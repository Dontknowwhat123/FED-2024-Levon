let menuKlik = document.querySelector("header > button");

menuKlik.onclick = openMenu;

function openMenu() {
  navBar = document.querySelector("header > nav");
  navBar.classList.add("toonMenu");
}

let sluitKnop = document.querySelector("header nav div button");

sluitKnop.onclick = sluitMenu;

function sluitMenu() {
    navBar = document.querySelector("header > nav");
    navBar.classList.remove("toonMenu");
}

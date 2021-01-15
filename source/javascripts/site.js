let hamburgerBtn;
let main;
let navbar;
let logo;

function handleClickOnHamburger() {
  if (!main.classList.contains("overlay")) {
    document.getElementById("hamburgerDiv").innerHTML = '<img src="images/icon-close.svg" alt="icon-hamburger" class="d-md-none align-baseline margin-left-15px" id="hamburger">';
    main.classList.add("overlay");
    logo.classList.add('d-none');
    navbar.classList.add("background-white");
    document.getElementById("menu-list").classList.remove("d-none");
    const as = document.getElementById("menu-list").getElementsByTagName('a');
    for (let item of as) {
      item.classList.add("text-black");
      item.classList.remove("text-white");
    }
  } else {
    document.getElementById("hamburgerDiv").innerHTML = '<img src="images/icon-hamburger.svg" alt="icon-hamburger" class="d-md-none align-baseline margin-left-15px" id="hamburger">';
    main.classList.remove("overlay");
    logo.classList.remove('d-none');
    navbar.classList.remove("background-white");
    document.getElementById("menu-list").classList.add("d-none");
    const as = document.getElementById("menu-list").getElementsByTagName('a');
    for (let item of as) {
      item.classList.remove("text-black");
      item.classList.add("text-white");
    }
  }
}
 
document.addEventListener("DOMContentLoaded", function () {
  hamburgerBtn = document.getElementById("hamburgerDiv");
  logo = document.getElementById("logo");
  main = document.getElementById("main");
  navbar = document.getElementById("navbar");
  hamburgerBtn.addEventListener("click", handleClickOnHamburger)
})
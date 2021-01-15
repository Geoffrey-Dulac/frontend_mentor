let hamburgerBtn;
let main;
let navbar;
let logo;

function handleClickOnHamburger() {
  if (!main.classList.contains("overlay")) {
    hamburger.src = "http://netrestore-985aebdc7810.local:4567/images/icon-close.svg";
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
    hamburger.src = "http://netrestore-985aebdc7810.local:4567/images/icon-hamburger.svg";
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
  hamburgerBtn = document.getElementById("hamburger");
  logo = document.getElementById("logo");
  main = document.getElementById("main");
  navbar = document.getElementById("navbar");
  hamburgerBtn.addEventListener("click", handleClickOnHamburger)
})
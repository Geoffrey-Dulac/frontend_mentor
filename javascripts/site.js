let hamburgerBtn;
let main;
let navbar;
let logo;
let form;
let buttonForm;
let statusForm;

function handleClickOnHamburger() {
  if (main.classList.contains("overlay")) {
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
  } else {
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
  }
}

function success() {
  form.reset();
  button.style = "display: none ";
  status.innerHTML = "Thanks!";
}

function error() {
  status.innerHTML = "Oops! There was a problem.";
}

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
 
document.addEventListener("DOMContentLoaded", function () {
  hamburgerBtn = document.getElementById("hamburgerDiv");
  logo = document.getElementById("logo");
  main = document.getElementById("main");
  navbar = document.getElementById("navbar");
  form = document.getElementById("my-form");
  form = document.getElementById("my-form");
  buttonForm = document.getElementById("my-form-button");
  status = document.getElementById("my-form-status");

  hamburgerBtn.addEventListener("click", handleClickOnHamburger)

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
})
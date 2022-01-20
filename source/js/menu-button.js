var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__button");
nav.classList.add("navigation--closed");
nav.classList.remove("navigation--nojs");
nav.addEventListener("click", function() {
  if (nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  } else{
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
  }
});

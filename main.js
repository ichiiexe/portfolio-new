import "./style.css";
import "./styles2.css";

// function renderPage() {
const app = document.getElementById("app");
//   app.innerHTML =

const menuNav = document.getElementById("menuNav");
const menuBTN = document.getElementById("menuBar");
const menuClose = document.getElementById("menuClose");

menuBTN.addEventListener("click", (event) => {
  menuNav.classList.remove("hidden");
  setTimeout(() => {
    menuNav.classList.remove("opacity-0");
    menuNav.classList.add("opacity-95");
  }, 10);
});

menuClose.addEventListener("click", (event) => {
  menuNav.classList.add("opacity-0");
  menuNav.classList.remove("opacity-95");
  setTimeout(() => {
    menuNav.classList.add("hidden");
  }, 10);
});

const workHover = document.querySelectorAll(".workHover");

workHover.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.classList.remove(
      "before:grayscale",
      "before:filter",
      "before:opacity-40"
    );
    img.firstElementChild.classList.remove("opacity-100");
    img.firstElementChild.classList.add("opacity-0");

    img.lastElementChild.classList.remove("translate-y-10");
    img.lastElementChild.classList.add("bg-rose-600", "bg-opacity-20");
  });
  // console.log(img.firstElementChild)
  // console.log(img.lastElementChild);
  img.addEventListener("mouseout", () => {
    img.classList.add("before:grayscale", "before:filter", "before:opacity-40");
    img.firstElementChild.classList.add("opacity-100");
    img.firstElementChild.classList.remove("opacity-0");

    img.lastElementChild.classList.add("translate-y-10");
    img.lastElementChild.classList.remove("bg-rose-600", "bg-opacity-20");
  });
});
//loader//
window.addEventListener("load", () => {
  console.log(app);
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    loader.classList.remove("opacity-100");
    loader.classList.add("opacity-0");
    content.classList.add("opacity-100");
    content.classList.remove("opacity-0");

    setTimeout(() => {
      loader.classList.add("hidden");
      content.classList.remove("hidden");
    }, 400);
  }, 600);
});
// }

// renderPage();

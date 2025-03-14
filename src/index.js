import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const contentDiv = document.querySelector("#content");

const homeTabButton = document.querySelector(".home");
homeTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadHome();
});

const menuTabButton = document.querySelector(".menu");
menuTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadMenu();
});

const contactTabButton = document.querySelector(".contact");
contactTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadContact();
});

loadHome();
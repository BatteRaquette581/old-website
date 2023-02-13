const navBar = document.querySelector("nav");
const navHeight = navBar.clientHeight;

document.querySelectorAll(".icon-link").forEach(icon => {
    let marginTop = (navHeight - icon.clientHeight) / 2;
    icon.style.marginTop = marginTop + "px";
});
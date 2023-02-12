let navBar = document.querySelector("nav");
let navBarHeight = navBar.clientHeight;

document.querySelectorAll(".icon-link").forEach(icon => {
    let iconWidth = icon.clientWidth;
    let iconHeight = icon.clientHeight;
    icon.parentNode.style.marginLeft = (document.clientWidth - iconWidth) / 2 + "px";
    icon.parentNode.style.marginTop = (navBarHeight - iconHeight) / 2 + "px";
});

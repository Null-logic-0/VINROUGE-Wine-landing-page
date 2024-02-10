burgermenu = document.querySelector(".header__burger-menu")
burgermenu.onclick = function () {
    navBar = document.querySelector(".header__nav-menu");
    navBar.classList.toggle("active");
}
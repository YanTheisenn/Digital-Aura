var menu = document.querySelector('nav ul');
var menubar = document.querySelector('nav .menu-icon');
var iconmenu = document.querySelector('nav .menu-icon img');

menubar.addEventListener('click', function () {
    if (iconmenu.getAttribute("src") === 'img/icones/menu-icon.png') {
        iconmenu.setAttribute("src", "img/icones/close.png");
    } else {
        iconmenu.setAttribute("src", "img/icones/menu-icon.png");
    }
    menu.classList.toggle('active');
});

const menu = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');

// openMenu "ascolta" l'azione dell'utente(click)
// e AGGIUNGE la classe 'active' ad hamburger-menu.
openMenu.addEventListener('click', function () {
    menu.classList.add('active');
});
// closeMenu "ascolta" l'azione dell'utente(click)
// e RIMUOVE la classe 'active' da hamburger-menu.
closeMenu.addEventListener('click', function () {
    menu.classList.remove('active');
});
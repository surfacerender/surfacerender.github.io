burger = document.querySelector('.burger');
nav = document.querySelector('nav');
sidebarnav = document.querySelector('.sidebarnav');


burger.addEventListener('click',() => {
    sidebarnav.classList.toggle('sidebarnavrtpos');
});

let showMenu = false;
burger.addEventListener("click", toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        // Reset the menu state
        showMenu = true;
    } else {
        // Reset the menu state
        showMenu = false;
    }
}
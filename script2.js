const navbarNav = document.querySelector('.navbar-nav');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener("click", function(e) {
    navbarNav.classList.toggle('active');
})

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
